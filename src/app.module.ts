import { Module } from '@nestjs/common';
import { LoginModule } from './modules/login/login.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './modules/common/common.module';
import { IssuesModule } from './modules/issues/issues.module';
import { ClientsModule } from './modules/clients/clients.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ProductsModule } from './modules/products/products.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { SalesModule } from './modules/sales/sales.module';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    LoginModule,
    ClientsModule,
    ProductsModule,
    InventoryModule,
    SalesModule,
    CommonModule,
    IssuesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
