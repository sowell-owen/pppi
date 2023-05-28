import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PasswordHashService } from './password.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PasswordHashService], // provider registration
  exports: [CustomersService, PasswordHashService],
})
export class CustomersModule {}
