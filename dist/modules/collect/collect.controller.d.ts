import { CollectService } from './collect.service';
export declare class CollectController {
    private readonly collectService;
    constructor(collectService: CollectService);
    collectMessage(): Promise<{
        version: string;
        template: {
            outputs: never[];
        };
    }>;
}
