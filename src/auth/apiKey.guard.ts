import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers['x-api-key']);

    return request.headers['x-api-key'] === process.env.X_API_KEY;
  }
}
