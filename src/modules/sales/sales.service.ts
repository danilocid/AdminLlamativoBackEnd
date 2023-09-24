import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovementType } from '../products/entities/movementType.entity';
import { In, Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { MovementDetail } from '../products/entities/movementDetail.entity';
import { Sale } from './entities/sale.entity';
import { SaleDetail } from './entities/saleDetail.entity';
import { Client } from '../clients/entities/client.entity';
import { DocumentType } from '../common/entities/document-type.entity';
import { PaymentMethod } from '../common/entities/payment-method.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(MovementType)
    private movementTypeRepository: Repository<MovementType>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(MovementDetail)
    private movementDetailRepository: Repository<MovementDetail>,
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
    @InjectRepository(SaleDetail)
    private saleDetailRepository: Repository<SaleDetail>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(DocumentType)
    private DocumentType: Repository<DocumentType>,
    @InjectRepository(PaymentMethod)
    private PaymentMethod: Repository<PaymentMethod>,
  ) {}
  async create(createSaleDto: CreateSaleDto) {
    console.log(createSaleDto);
    try {
      let sale = this.saleRepository.create({});
      //create sale
      //search client
      let client = await this.clientRepository.findOne({
        where: { rut: createSaleDto.rut },
      });
      if (!client) {
        throw new InternalServerErrorException('Cliente no encontrado');
      }
      sale.client = client;
      sale.TotalNet = createSaleDto.totalNet;
      sale.TotalTax = createSaleDto.totalTax;
      sale.TotalNetCost = createSaleDto.totalNetCost;
      sale.TotalTaxCost = createSaleDto.totalTaxCost;
      sale.documentNumber = createSaleDto.documentNumber;
      //get document type
      let documentType = await this.DocumentType.findOne({
        where: { id: createSaleDto.documentTypeId },
      });
      if (!documentType) {
        throw new InternalServerErrorException(
          'Tipo de documento no encontrado',
        );
      }
      sale.documentType = documentType;
      //get payment type
      let paymentType = await this.PaymentMethod.findOne({
        where: { id: createSaleDto.paymentMethodId },
      });
      if (!paymentType) {
        throw new InternalServerErrorException('Tipo de pago no encontrado');
      }
      sale.paymentMethod = paymentType;
      //save sale
      let saleSaved = await this.saleRepository.save(sale);
      if (!saleSaved) {
        throw new InternalServerErrorException('Error al guardar la venta');
      }
      let MovementType = await this.movementTypeRepository.findOne({
        where: { id: 1 },
      });
      let saleDatails = [];
      //create sale details
      await createSaleDto.saleDetails.forEach(async (element) => {
        let product = await this.productRepository.findOne({
          where: { id: element.productId },
        });
        if (!product) {
          //delete sale
          throw new InternalServerErrorException('Producto no encontrado');
        }
        let saleDetail = this.saleDetailRepository.create({
          id: 0,
          quantity: element.quantity,
          netCost: product.netCost,
          taxCost: product.taxCost,
          saleId: saleSaved.id,
          product: product,
          netSale: element.net,
          taxSale: element.tax,
        });
        let saleDetailSaved = await this.saleDetailRepository.save(saleDetail);
        if (!saleDetailSaved) {
          //delete sale
          throw new InternalServerErrorException('Error al guardar el detalle');
        }
        //update product stock
        product.stock = product.stock - element.quantity;
        await this.productRepository.save(product);
        //save product movement detail
        let movementDetail = this.movementDetailRepository.create({
          id: 0,
          movementId: saleSaved.id,
          product: product,
          movementType: MovementType,
          quantity: element.quantity,
        });

        await this.movementDetailRepository.save(movementDetail);
        saleDatails.push(saleDetailSaved);
      });

      return {
        message: 'Venta creada',
        saleSaved,
        saleDatails,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      let sales = await this.saleRepository.find({
        relations: ['client', 'documentType', 'paymentMethod'],
      });
      if (!sales) {
        throw new InternalServerErrorException('No se encontraron ventas');
      }
      return sales;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      let sale = await this.saleRepository.findOne({
        where: { id: id },
        relations: ['client', 'documentType', 'paymentMethod'],
      });
      if (!sale) {
        throw new InternalServerErrorException('Venta no encontrada');
      }
      let saleDetails = await this.saleDetailRepository.find({
        where: { saleId: id },
        relations: ['product'],
      });
      return {
        sale,
        saleDetails,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
