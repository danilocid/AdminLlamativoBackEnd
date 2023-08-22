import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { MovementType } from './movementType.entity';
import { Product } from './product.entity';

@Entity()
export class MovementDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MovementType, (movementType) => movementType.id)
  movementType: MovementType;
  @Column()
  movementId: number;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column()
  quantity: number;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}
