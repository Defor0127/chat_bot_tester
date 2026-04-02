import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
export declare class KakaoService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    saveUtterance(userId: string, content: string): Promise<Message>;
}
