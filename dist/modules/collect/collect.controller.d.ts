import { CollectService } from './collect.service';
import { CreateCollectDto } from './dto/create-collect.dto';
export declare class CollectController {
    private readonly collectService;
    constructor(collectService: CollectService);
    collectMessage(payload: any): Promise<import("./entities/collect.entity").Collect | null>;
    saveMessage(payload: CreateCollectDto): Promise<import("./entities/collect.entity").Collect>;
}
