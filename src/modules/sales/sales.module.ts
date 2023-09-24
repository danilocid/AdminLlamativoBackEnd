import { Client } from '../clients/entities/client.entity';
import { DocumentType } from '../common/entities/document-type.entity';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MovementDetail } from '../products/entities/movementDetail.entity';
import { MovementType } from '../products/entities/movementType.entity';
import { PassportModule } from '@nestjs/passport';
import { Product } from '../products/entities/product.entity';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { SaleDetail } from './entities/saleDetail.entity';
import { PaymentMethod } from '../common/entities/payment-method.entity';

@Module({
  controllers: [SalesController],
  imports: [
    TypeOrmModule.forFeature([
      DocumentType,
      Client,
      Product,
      MovementType,
      MovementDetail,
      Sale,
      SaleDetail,
      PaymentMethod,
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.SECRET,
          signOptions: { expiresIn: '1d' },
        };
      },
      inject: [],
    }),
  ],
  providers: [SalesService],
})
export class SalesModule {}
