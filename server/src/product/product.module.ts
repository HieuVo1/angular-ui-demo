import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import {Product} from './product.entity'
import { ProductService } from './product.service';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  exports:[ProductService],
  providers: [ProductService]
})
export class ProductModule {}
