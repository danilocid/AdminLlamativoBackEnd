import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { InventoryDetail } from './entities/inventoryDetail.entity';
import { MovementType } from '../products/entities/movementType.entity';
import { Product } from '../products/entities/product.entity';
import { MovementDetail } from '../products/entities/movementDetail.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @InjectRepository(InventoryDetail)
    private inventoryDetailRepository: Repository<InventoryDetail>,
    @InjectRepository(MovementType)
    private movementTypeRepository: Repository<MovementType>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(MovementDetail)
    private movementDetailRepository: Repository<MovementDetail>,
  ) {}
  async create(createInventoryDto: CreateInventoryDto) {
    console.log(createInventoryDto);
    try {
      let movementType = await this.movementTypeRepository.findOne({
        where: { id: createInventoryDto.movementType },
      });

      let inventory = this.inventoryRepository.create({
        id: 0,
        entries: createInventoryDto.entries,
        exits: createInventoryDto.exits,
        observation: createInventoryDto.observations,
        movementType: movementType,
        totalNetCost: createInventoryDto.totalNetCost,
        totalTaxCost: createInventoryDto.totalTaxCost,
      });
      let inventorySaved = await this.inventoryRepository.save(inventory);
      if (inventorySaved) {
        //create inventory details
        createInventoryDto.products.forEach(async (element) => {
          let product = await this.productRepository.findOne({
            where: { id: element.id },
          });
          let newStock = product.stock + element.entries - element.exits;
          if (newStock < 0) {
            //delete inventory
            await this.inventoryRepository.delete(inventorySaved.id);
            throw new InternalServerErrorException(
              'No se puede realizar la operacion, no hay stock suficiente',
            );
          }
          let inventoryDetail = this.inventoryDetailRepository.create({
            id: 0,
            entries: element.entries,
            exits: element.exits,
            netCost: element.netCost,
            taxCost: element.taxCost,
            inventory: inventorySaved,
            product: product,
          });
          await this.inventoryDetailRepository.save(inventoryDetail);
          //update product stock
          product.stock = newStock;
          await this.productRepository.save(product);
          //save product movement detail
          let movementDetail = this.movementDetailRepository.create({
            id: 0,
            movementId: inventorySaved.id,
            product: product,
            movementType: movementType,
            quantity: element.entries - element.exits,
          });
          await this.movementDetailRepository.save(movementDetail);
        });
      }
      return inventorySaved;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Error al crear el inventario');
    }
  }

  async findAll() {
    let inventory = await this.inventoryRepository.find({
      relations: ['movementType'],
    });
    return inventory;
  }

  async findOne(id: number) {
    try {
      let inventoryData = await this.inventoryRepository.findOne({
        where: { id: id },
        relations: ['movementType'],
      });
      if (inventoryData) {
        console.log(inventoryData);
        //get inventory details
        let inventoryDetails = await this.inventoryDetailRepository.query(
          `SELECT * FROM inventory_detail WHERE inventoryId = ${id}`,
        );
        console.log(inventoryDetails);
        let invetoryDetailData = [];
        for (let i = 0; i < inventoryDetails.length; i++) {
          let product = await this.productRepository.findOne({
            where: { id: inventoryDetails[i].productId },
          });
          let detailData = {
            id: inventoryDetails[i].id,
            entries: inventoryDetails[i].entries,
            exits: inventoryDetails[i].exits,
            netCost: inventoryDetails[i].netCost,
            taxCost: inventoryDetails[i].taxCost,
            inventoryId: inventoryDetails[i].inventoryId,
            product: product,
          };

          invetoryDetailData.push(detailData);
        }
        console.log(invetoryDetailData);

        if (!inventoryDetails) {
          return new NotFoundException(
            'No se encontraron detalles del inventario',
          );
        }
        return {
          inventory: inventoryData,
          inventoryDetails: invetoryDetailData,
        };
      } else {
        return new NotFoundException('No se encontro el inventario');
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al buscar el inventario');
    }
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
