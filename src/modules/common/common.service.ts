import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
import { PaymentMethod } from './entities/payment-method.entity';
import { DocumentType } from './entities/document-type.entity';
import { Region } from './entities/regions.entity';
import { Comuns } from './entities/comuns.entity';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly payment: Repository<PaymentMethod>,
    @InjectRepository(DocumentType)
    private readonly documentType: Repository<DocumentType>,
    @InjectRepository(Region)
    private readonly region: Repository<Region>,
    @InjectRepository(Comuns)
    private readonly comuns: Repository<Comuns>,
  ) {}

  findAllPaymentMethod() {
    let payment = this.payment.find();
    return payment;
  }

  findAlldocumentType() {
    let documentType = this.documentType.find();
    return documentType;
  }

  findAllRegion() {
    let region = this.region.find({
      order: {
        id: 'ASC',
      },
    });
    return region;
  }

  findAllComuns() {
    /* let comuns = this.comuns.find({
      relations: ['region'],
    }); */
    let comuns = this.comuns
      .createQueryBuilder('comuns')
      .leftJoinAndSelect('comuns.region', 'region')
      .getMany();
    return comuns;
  }

  async findAllComunsByRegionId(regionId: number) {
    let region = await this.region.findOne({
      where: { id: regionId },
    });
    console.log(region);
    if (!region) {
      throw new NotFoundException('Region not found');
    }
    // query to get all comuns by regionId
    let comuns = await this.comuns.query(
      `SELECT * FROM comuns WHERE regionId = ${regionId}`,
    );

    return comuns;
  }
}
