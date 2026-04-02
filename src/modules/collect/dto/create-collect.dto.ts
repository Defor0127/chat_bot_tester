import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCollectDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  channelUserId: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}