import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Not, Repository } from 'typeorm';
import { InventoryDetail } from './entities/inventoryDetail.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @InjectRepository(InventoryDetail)
    private inventoryDetailRepository: Repository<InventoryDetail>,
  ) {}
  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
  }

  async findAll() {
    let inventory = await this.inventoryRepository.find({
      relations: ['movementType'],
    });
    return inventory;
  }

  async findOne(id: number) {
    try {
      let inventory = await this.inventoryRepository.findOne({
        where: { id: id },
        relations: ['movementType'],
      });
      if (inventory) {
        //get inventory details
        let inventoryDetails = await this.inventoryDetailRepository.find({
          where: { inventory: inventory },
          relations: ['product'],
        });
        if (!inventoryDetails) {
          return new NotFoundException(
            'No se encontraron detalles del inventario',
          );
        }
        return { inventory, inventoryDetails };
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
