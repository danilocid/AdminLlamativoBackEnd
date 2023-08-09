import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['internalCode'])
  internalCode: string;

  @Column()
  @Unique(['barCode'])
  barCode: string;

  @Column()
  @Unique(['description'])
  description: string;

  @Column()
  netCost: number;

  @Column()
  taxCost: number;

  @Column()
  netSale: number;

  @Column()
  taxSale: number;

  @Column({ default: 0 })
  stock: number;

  @Column()
  stockMin: number;

  @Column({ default: true })
  active: boolean;

  @Column({
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastCount: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
