import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['region'])
  region: string;
}
