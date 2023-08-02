import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "<h2>Pet Store Backend</h2>";
  }
}
