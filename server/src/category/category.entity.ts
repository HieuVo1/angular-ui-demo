import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() url: string;
  @Column('timestamp')created_at:Date;
}