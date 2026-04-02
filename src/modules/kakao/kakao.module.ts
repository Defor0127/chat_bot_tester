import { Module } from '@nestjs/common';
import { KakaoService } from './kakao.service';
import { KakaoController } from './kakao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [KakaoController],
  providers: [KakaoService],
})
export class KakaoModule {}
