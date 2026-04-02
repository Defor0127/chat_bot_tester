import { Injectable } from '@nestjs/common';
import { CreateKakaoDto } from './dto/create-kakao.dto';
import { UpdateKakaoDto } from './dto/update-kakao.dto';

@Injectable()
export class KakaoService {
  create(createKakaoDto: CreateKakaoDto) {
    return 'This action adds a new kakao';
  }

  findAll() {
    return `This action returns all kakao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kakao`;
  }

  update(id: number, updateKakaoDto: UpdateKakaoDto) {
    return `This action updates a #${id} kakao`;
  }

  remove(id: number) {
    return `This action removes a #${id} kakao`;
  }
}
