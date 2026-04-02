import { PartialType } from '@nestjs/mapped-types';
import { CreateKakaoDto } from './create-kakao.dto';

export class UpdateKakaoDto extends PartialType(CreateKakaoDto) {}
