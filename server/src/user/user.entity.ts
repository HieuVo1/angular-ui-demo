import { Entity, PrimaryGeneratedColumn, Column  } from "typeorm";
import * as bcrypt from 'bcryptjs';
@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column() name:string;
  @Column() email: string;
  @Column() password: string;
  @Column() active: number;
  @Column('timestamp')created_at:Date;
  async comparePassword(attempt: string)
    {
        return await bcrypt.compare(attempt,this.password);
    }
}