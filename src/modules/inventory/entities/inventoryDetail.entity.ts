import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Inventory } from './inventory.entity';
import { Product } from 'src/modules/products/entities/product.entity';
@Entity()
export class InventoryDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  netCost: number;

  @Column()
  taxCost: number;

  @Column()
  entries: number;

  @Column()
  exits: number;

  @ManyToOne(() => Inventory, (inventory) => inventory.id)
  inventory: Inventory;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}
