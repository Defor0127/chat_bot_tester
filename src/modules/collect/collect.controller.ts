import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CollectService } from './collect.service';


@Controller('collect')
export class CollectController {
  constructor(private readonly collectService: CollectService) {}


  @Get('')
  @HttpCode(200)
  async collectMessage(
    @Body() payload: any,
  ) {
    console.log('collectMessage');
    return this.collectService.saveKakaoMessage(payload);
  }
}
