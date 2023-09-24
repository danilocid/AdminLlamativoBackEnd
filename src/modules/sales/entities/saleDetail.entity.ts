import { Product } from 'src/modules/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class SaleDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  saleId: number;
  @ManyToOne(() => Product, (product) => product.id)
  product: Product;
  @Column()
  quantity: number;
  @Column()
  netCost: number;
  @Column()
  taxCost: number;
  @Column()
  netSale: number;
  @Column()
  taxSale: number;
  @CreateDateColumn()
  createdAt: Date;
}
