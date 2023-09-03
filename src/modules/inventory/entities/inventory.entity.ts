import { MovementType } from 'src/modules/products/entities/movementType.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalNetCost: number;

  @Column()
  totalTaxCost: number;

  @Column()
  entries: number;

  @Column()
  exits: number;

  @ManyToOne(() => MovementType, (movementType) => movementType.id)
  movementType: MovementType;

  @Column()
  observation: string;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp

  @UpdateDateColumn()
  updatedAt: Date;
}
