import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository, Not } from 'typeorm';
import { MovementType } from './entities/movementType.entity';
import { MovementDetail } from './entities/movementDetail.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(MovementType)
    private movementTypeRepository: Repository<MovementType>,
    @InjectRepository(MovementDetail)
    private movementDetailRepository: Repository<MovementDetail>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    //check if product exists (by internal code, bar code or description)
    let product = await this.productRepository.find({
      where: [
        { internalCode: createProductDto.internalCode },
        { barCode: createProductDto.barCode },
        { description: createProductDto.description },
      ],
    });
    if (product.length > 0) {
      throw new NotFoundException({
        message: `Product with internal code ${createProductDto.internalCode} already exists`,
      });
    }
    //if createProductDto don't have a barCode, generate one, based on the id of the product, the barCode will be the 780 + many zeros + id, the zeros will be added to complete 13 digits
    if (!createProductDto.barCode) {
      let barCode = '780';
      let zeros = '';
      //the id will be generated by the database, so we need to get the max id and add 1
      let id = await this.productRepository.query(
        'SELECT MAX(id) as max FROM product',
      );
      id = id[0].max + 1;
      for (let i = 0; i < 10 - id.toString().length; i++) {
        zeros += '0';
      }
      barCode += zeros + id;
      createProductDto.barCode = barCode;
    }

    //save product
    let newproduct = await this.productRepository.save(createProductDto);

    return newproduct;
  }

  async findAll(active: boolean, stock: boolean) {
    console.log(active);
    console.log('stock', stock);
    let products;
    if (stock) {
      //get products with stock, the stock need to be greater than 0
      products = await this.productRepository.find({
        where: {
          stock: Not(0),
        },
      });
    } else {
      products = await this.productRepository.find();
    }
    return products;
  }

  async findOne(id: number) {
    const product: Product = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException({
        message: `Product with id ${id} not found`,
      });
    }

    let movementDetails = await this.movementDetailRepository.find({
      relations: ['movementType'],
      where: {
        product: {
          id: id,
        },
      },
    });

    return {
      product: product,
      movementDetails: movementDetails,
    };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    //check if product exists, by bar code, internal code or description
    let product = await this.productRepository.find({
      where: [
        { internalCode: updateProductDto.internalCode },
        { barCode: updateProductDto.barCode },
        { description: updateProductDto.description },
      ],
    });
    if (product.length > 0) {
      product.forEach((element) => {
        if (element.id != id) {
          throw new BadRequestException({
            message: `Revisa los datos, el producto con código interno ${updateProductDto.internalCode} ya existe`,
          });
        }
      });
    }
    //if updateProductDto don't have a barCode, generate one, based on the id of the product, the barCode will be the 780 + many zeros + id, the zeros will be added to complete 13 digits
    if (!updateProductDto.barCode) {
      let barCode = '780';
      let zeros = '';

      for (let i = 0; i < 10 - id.toString().length; i++) {
        zeros += '0';
      }
      barCode += zeros + id;
      updateProductDto.barCode = barCode;
    }
    //update product
    let updatedProduct = await this.productRepository.update(
      { id: id },
      updateProductDto,
    );

    return updateProductDto;
  }

  async getMovementsTypes() {
    let movementsTypes = await this.movementTypeRepository.find();
    return movementsTypes;
  }

  async addMovementDetail(movementDetail: MovementDetail) {
    console.log(movementDetail);
    //remove id
    delete movementDetail.id;
    let newMovementDetail =
      await this.movementDetailRepository.save(movementDetail);
    console.log(newMovementDetail);
  }
}