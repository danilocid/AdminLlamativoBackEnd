import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DocumentType } from './entities/document-type.entity';
import { PaymentMethod } from './entities/payment-method.entity';
import { Region } from './entities/regions.entity';
import { Comuns } from './entities/comuns.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentMethod, DocumentType, Region, Comuns]),
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
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}