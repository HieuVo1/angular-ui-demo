import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Order} from './order.entity'
@Injectable()
export class OrderService extends TypeOrmCrudService<Order>{
    constructor(@InjectRepository(Order) repo) {
        super(repo);
      }}
