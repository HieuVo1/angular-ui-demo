import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() status: string;
  @Column() Total: number;
  @Column('timestamp')date:Date;
}