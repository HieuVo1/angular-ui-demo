import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany  } from "typeorm";
@Entity()
export class Product {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() url: string;
  @Column('int') price: number;
  @Column('text') image: string;
  @Column('text') description: string;
  @Column('timestamp')created_at:Date;
  @Column() category_url: string;

  // @OneToMany((type) => CategoryProduct, (el) => el.product, {
  //   persistence: false,
  //   onDelete: 'CASCADE',
  // })
  // CategoryProduct?: CategoryProduct[];
}