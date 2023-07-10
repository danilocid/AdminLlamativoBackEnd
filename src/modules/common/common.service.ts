import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './entities/payment-method.entity';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly payment: Repository<PaymentMethod>,
  ) {}

  findAllPaymentMethod() {
    let payment = this.payment.find();
    return payment;
  }
}
