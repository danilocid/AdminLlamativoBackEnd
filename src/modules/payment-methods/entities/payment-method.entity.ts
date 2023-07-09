import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity({ name: 'medios_de_pago' })
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['medio_de_pago'])
  medio_de_pago: string;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
