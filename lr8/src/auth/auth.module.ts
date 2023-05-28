import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomersModule } from '../customers/customers.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
  imports: [
    CustomersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [AuthModule],
})
export class AuthModule {}
