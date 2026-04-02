import { Injectable } from '@nestjs/common';

@Injectable()
export class CollectService {
  async collectMessage() {
    return {
      "version": "2.0",
      "template": {
        "outputs": []
      }
    }
  }
}
