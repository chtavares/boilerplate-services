import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivityService {
  constructor() {}
  async testService(): Promise<string> {
    return 'hello world';
  }
}
