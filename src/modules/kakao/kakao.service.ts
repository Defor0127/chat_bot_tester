import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class KakaoService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async saveUtterance(userId: string, content: string) {
    const newMessage = this.messageRepository.create({
      kakaoUserId: userId,
      content: content,
    });
    return await this.messageRepository.save(newMessage);
  }
}