import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENVIRONMENT } from './env-defaults';
import './env-defaults';
import { ActivityModule } from './activity/activity.module';
import { ScheduleModule } from '@nestjs/schedule';

const imports = [ActivityModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${ENVIRONMENT}.env`,
      isGlobal: true,
    }),
    ...imports,
  ],
})
export class AppModule {}
