import { Comuns } from 'src/modules/common/entities/comuns.entity';
import { Region } from 'src/modules/common/entities/regions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryColumn()
  @Unique(['rut'])
  rut: string;

  @Column()
  @Unique(['name'])
  name: string;

  @Column()
  activity: string;

  @Column()
  address: string;

  //un cliente tiene una comuna y una region, una comuna tiene muchas clientes, una region tiene muchas comunas
  @ManyToOne(() => Comuns, (commune) => commune.id)
  commune: Comuns;

  @ManyToOne(() => Region, (region) => region.id)
  region: Region;

  @Column()
  phone: number;

  @Column()
  email: string;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}
