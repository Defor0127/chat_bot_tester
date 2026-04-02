import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { KakaoService } from './kakao.service';

@Controller('kakao')
export class KakaoController {
  constructor(private readonly kakaoService: KakaoService) {}

  @Post('test')
  @HttpCode(200)
  async testResponse(@Body() body: any) {
    // 1. 데이터 추출
    const utterance = body.userRequest?.utterance; // 메시지 내용
    const userId = body.userRequest?.user?.id;    // 사용자 고유 ID (카카오 제공 식별값)
    const serverTime = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }); // 한국 시간 기준 작성 시간

    // 2. 서버 로그에 출력 (데이터 확인용)
    console.log('--- 데이터 추출 결과 ---');
    console.log('body', body);
    console.log('body.userRequest', body.userRequest);
    console.log('body.userRequest.utterance', body.userRequest.utterance);
    console.log('body.userRequest.user', body.userRequest.user);
    console.log('body.userRequest.user.id', body.userRequest.user.id);
    console.log(`사용자 ID: ${userId}`);
    console.log(`메시지: ${utterance}`);
    console.log(`시간: ${serverTime}`);
    console.log('-----------------------');
    if (userId && utterance) {
      await this.kakaoService.saveUtterance(userId, utterance);
      console.log(`[수집 완료] ID: ${userId}, 내용: ${utterance}`);
    }

    // 3. 사용자에게 보여줄 응답
    return {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: ``
            }
          }
        ]
      }
    };
  }
}