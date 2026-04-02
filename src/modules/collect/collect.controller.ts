import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CollectService } from './collect.service';


@Controller('collect')
export class CollectController {
  constructor(private readonly collectService: CollectService) {}


  @Get('')
  @HttpCode(200)
  async collectMessage(
  ) {
    console.log('collectMessage');
    return this.collectService.collectMessage();
  }
}
