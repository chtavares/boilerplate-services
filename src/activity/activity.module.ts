import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { ActivityWorker } from './worker/activity-worker';

@Module({
  imports: [],
  providers: [ActivityService, ActivityWorker],
  controllers: [ActivityController],
  exports: [ActivityWorker],
})
export class ActivityModule {}
