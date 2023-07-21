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
export class IssueStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['status'])
  status: string;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class IssueSection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['section'])
  section: string;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class IssueType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['type'])
  type: string;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['title'])
  title: string;

  @Column({ nullable: true })
  description: string;

  //foreign key
  @ManyToOne(() => IssueStatus, (issueStatus) => issueStatus.id)
  issueStatus: IssueStatus;

  //foreign key

  @ManyToOne(() => IssueSection, (issueSection) => issueSection.id)
  issueSection: IssueSection;

  //foreign key

  @ManyToOne(() => IssueType, (issueType) => issueType.id)
  issueType: IssueType;

  //timestamp
  @CreateDateColumn()
  createdAt: Date;

  //timestamp
  @UpdateDateColumn()
  updatedAt: Date;
}
