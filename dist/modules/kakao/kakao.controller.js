"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoController = void 0;
const common_1 = require("@nestjs/common");
const kakao_service_1 = require("./kakao.service");
let KakaoController = class KakaoController {
    kakaoService;
    constructor(kakaoService) {
        this.kakaoService = kakaoService;
    }
    async testResponse(body) {
        const utterance = body.userRequest?.utterance;
        const userId = body.userRequest?.user?.id;
        const serverTime = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
        console.log('--- 데이터 추출 결과 ---');
        console.log(`사용자 ID: ${userId}`);
        console.log(`메시지: ${utterance}`);
        console.log(`시간: ${serverTime}`);
        console.log('-----------------------');
        if (userId && utterance) {
            await this.kakaoService.saveUtterance(userId, utterance);
            console.log(`[수집 완료] ID: ${userId}, 내용: ${utterance}`);
        }
        return {
            version: "2.0",
            template: {
                outputs: [
                    {
                        simpleText: {
                            text: `데이터가 확인되었습니다.\n내용: ${utterance}\nID: ${userId}\n시간: ${serverTime}`
                        }
                    }
                ]
            }
        };
    }
};
exports.KakaoController = KakaoController;
__decorate([
    (0, common_1.Post)('test'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KakaoController.prototype, "testResponse", null);
exports.KakaoController = KakaoController = __decorate([
    (0, common_1.Controller)('kakao'),
    __metadata("design:paramtypes", [kakao_service_1.KakaoService])
], KakaoController);
//# sourceMappingURL=kakao.controller.js.map