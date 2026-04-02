import { KakaoService } from './kakao.service';
export declare class KakaoController {
    private readonly kakaoService;
    constructor(kakaoService: KakaoService);
    testResponse(body: any): Promise<{
        version: string;
        template: {
            outputs: {
                simpleText: {
                    text: string;
                };
            }[];
        };
    }>;
}
