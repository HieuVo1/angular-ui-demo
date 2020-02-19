import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import {Product} from './product.entity';
import{ProductService} from './product.service';
import { Category} from '../category/category.entity';
@Crud({
    model: {
      type: Product
    },
  query:{
    join:{
      Category:{
        allow:['name','url']
      }
    }
  }
  })
@Controller('product')
export class ProductController implements CrudController<Product> {
    constructor(public service: ProductService) {
    }
    
}
