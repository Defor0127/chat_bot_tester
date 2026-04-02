import { Collect } from './entities/collect.entity';
import { Repository } from 'typeorm';
import { CreateCollectDto } from './dto/create-collect.dto';
export declare class CollectService {
    private readonly collectRepository;
    constructor(collectRepository: Repository<Collect>);
    saveMessage(createCollectDto: CreateCollectDto): Promise<Collect>;
    saveKakaoMessage(payload: any): Promise<Collect | null>;
    findAll(): Promise<Collect[]>;
    findOne(id: number): Promise<Collect | null>;
}
