import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { InventoryDetail } from './entities/inventoryDetail.entity';
import { MovementType } from '../products/entities/movementType.entity';
import { Product } from '../products/entities/product.entity';
import { MovementDetail } from '../products/entities/movementDetail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Inventory,
      InventoryDetail,
      MovementType,
      Product,
      MovementDetail,
    ]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
