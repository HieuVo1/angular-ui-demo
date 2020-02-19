import { Controller, Get, Post, Body } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import {User} from './user.entity';
import{UserService} from './user.service';
import * as bcrypt from 'bcryptjs'

@Controller('user')
export class UserController  {
    private data;
    constructor(public service: UserService) {
    }

    @Post()
    async getSignle(@Body() data):Promise<any>
    {
        return this.service.getSignle(data);
    }
    @Post('create')
    async create(@Body() data):Promise<any>
    {
        data.password=await bcrypt.hash(data.password,10);
        return this.service.create(data);
    }
    
}