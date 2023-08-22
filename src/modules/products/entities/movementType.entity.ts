import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class MovementType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['movementType'])
  movementType: string;
}
