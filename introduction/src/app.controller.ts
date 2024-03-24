import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
@Header('content-type','text/html')
  @Get()
  getHello(): {name: string} {
    //return this.appService.getHello();
    return {name : 'Junaid Ali'}
  }
}
