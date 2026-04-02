import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collect } from './entities/collect.entity';
import { Repository } from 'typeorm';
import { CreateCollectDto } from './dto/create-collect.dto';

@Injectable()
export class CollectService {
  constructor(
    @InjectRepository(Collect)
    private readonly collectRepository: Repository<Collect>,
  ) {}

  async saveMessage(createCollectDto: CreateCollectDto): Promise<Collect> {
    const collect = this.collectRepository.create(createCollectDto);
    return await this.collectRepository.save(collect);
  }

  async saveKakaoMessage(payload: any): Promise<Collect | null> {
    const channelUserId = payload?.userRequest?.user?.id;
    const message = payload?.userRequest?.utterance;

    if (!channelUserId || !message) {
      return null;
    }

    const collect = this.collectRepository.create({
      channelUserId,
      message,
    });

    return await this.collectRepository.save(collect);
  }

  async findAll(): Promise<Collect[]> {
    return await this.collectRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Collect | null> {
    return await this.collectRepository.findOne({
      where: { id },
    });
  }
}