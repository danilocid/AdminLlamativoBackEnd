import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { InventoryDetail } from './entities/inventoryDetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory, InventoryDetail])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
