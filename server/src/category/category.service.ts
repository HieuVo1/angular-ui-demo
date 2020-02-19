import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Category} from './category.entity'
@Injectable()
export class CategoryService extends TypeOrmCrudService<Category>{
    constructor(@InjectRepository(Category) repo) {
        super(repo);
      }}
