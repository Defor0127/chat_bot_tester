import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CreateCollectDto } from './dto/create-collect.dto';


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

  @Post()
  @HttpCode(200)
  async saveMessage(
    @Body() payload: CreateCollectDto,
  ) {
    console.log('collectMessage');
    return this.collectService.saveMessage(payload);
  }
}
