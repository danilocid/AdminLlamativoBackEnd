import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './entities/payment-method.entity';
import { DocumentType } from './entities/document-type.entity';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly payment: Repository<PaymentMethod>,
    @InjectRepository(DocumentType)
    private readonly documentType: Repository<DocumentType>,
  ) {}

  findAllPaymentMethod() {
    let payment = this.payment.find();
    return payment;
  }

  findAlldocumentType() {
    let documentType = this.documentType.find();
    return documentType;
  }
}
