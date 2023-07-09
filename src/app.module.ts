import { Module } from '@nestjs/common';
import { LoginModule } from './modules/login/login.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodsModule } from './modules/payment-methods/payment-methods.module';
require('dotenv');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LoginModule,
    PaymentMethodsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
