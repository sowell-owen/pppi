import { Module } from '@nestjs/common';
import { ApiVersioningService } from './api-versioning.service';
import { ApiVersioningController } from './api-versioning.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ApiVersioningController],
  providers: [ApiVersioningService],
  imports: [AuthModule],
})
export class ApiVersioningModule {}
