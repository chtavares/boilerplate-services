import { Module } from '@nestjs/common';
import { ApiKeyGuard } from './apiKey.guard';

@Module({
  providers: [ApiKeyGuard],
  exports: [ApiKeyGuard],
})
export class AuthModule {}
