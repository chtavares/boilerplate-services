import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../auth/apiKey.guard';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get('test')
  @UseGuards(ApiKeyGuard)
  test() {
    return this.activityService.testService();
  }
}
