import { CollectService } from './collect.service';
export declare class CollectController {
    private readonly collectService;
    constructor(collectService: CollectService);
    collectMessage(payload: any): Promise<import("./entities/collect.entity").Collect | null>;
}
