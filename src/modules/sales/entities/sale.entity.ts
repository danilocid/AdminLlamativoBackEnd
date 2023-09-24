import { Client } from 'src/modules/clients/entities/client.entity';
import { DocumentType } from 'src/modules/common/entities/document-type.entity';
import { PaymentMethod } from 'src/modules/common/entities/payment-method.entity';
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
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  TotalNet: number;
  @Column()
  TotalTax: number;
  @Column()
  TotalNetCost: number;
  @Column()
  TotalTaxCost: number;
  @ManyToOne(() => DocumentType, (documentType) => documentType.id)
  documentType: DocumentType;
  @Column()
  documentNumber: number;
  @ManyToOne(() => Client, (client) => client.rut)
  client: Client;
  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.id)
  paymentMethod: PaymentMethod;
  @CreateDateColumn()
  createdAt: Date;
}
