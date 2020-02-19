import { Injectable,HttpException, HttpStatus  } from '@nestjs/common';
import { Repository } from "typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {User} from './user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
    constructor( @InjectRepository(User)
        private userRepository:Repository<User>
        ) {
        
      }
      async getSignle(data):Promise<any>
      {
        const {email,password}=data;
        const user= await this.userRepository.findOne({where:{email}})        
          if(!user|| !(await user.comparePassword(password))){
            throw new HttpException(
              'Invalid username/password',
              HttpStatus.BAD_REQUEST,
          )
                }
        return user;
      }
      async create(data):Promise<any>
      {
          const user = await this.userRepository.create(data);
          await this.userRepository.save(data);
          return user;
      }
    }
