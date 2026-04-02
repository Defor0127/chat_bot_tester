import { Controller, Post, Body, HttpCode } from '@nestjs/common';

@Controller('kakao')
export class KakaoController {
  @Post('test')
  @HttpCode(200) // 카카오는 200 상태 코드를 기대합니다.
  testResponse(@Body() body: any) {
    // 1. 카카오로부터 들어오는 요청 데이터 확인 (콘솔 로그)
    console.log('Received from Kakao:', JSON.stringify(body, null, 2));

    // 2. 사용자가 입력한 메시지 추출
    const userMessage = body.userRequest?.utterance || '메시지가 없습니다';

    // 3. 카카오 i 오픈빌더 규격에 맞춘 응답 객체
    return {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: `테스트 성공! 보낸 메시지: ${userMessage}`
            }
          }
        ]
      }
    };
  }
}