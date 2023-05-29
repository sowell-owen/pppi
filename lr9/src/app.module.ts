import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { ApiVersioningModule } from './api-versioning/api-versioning.module';

@Module({
  imports: [
    OrdersModule,
    CustomersModule,
    ProductsModule,
    AuthModule,
    ApiVersioningModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
