import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { ProductController } from './src/product/product.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import{ProductModule} from './src/product/product.module'
import { SendmailController } from './src/sendmail/sendmail.controller';
import { SendmailModule } from './src/sendmail/sendmail.module';
import { CategoryModule } from './src/category/category.module';
import { UserModule } from './src/user/user.module';
import { OrderModule } from './src/order/order.module';
@Module({
  imports: [TypeOrmModule.forRoot(),ProductModule,
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    SendmailModule,
    CategoryModule,
    UserModule,
    OrderModule,
    
  ],
  controllers: [ProductController, SendmailController],
  providers: []
})
export class ApplicationModule {}
