import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Region } from './regions.entity';
@Entity()
export class Comuns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['comuns'])
  comuns: string;

  @ManyToOne(() => Region, (region) => region.id)
  region: Region;
}
