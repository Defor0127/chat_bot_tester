"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKakaoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_kakao_dto_1 = require("./create-kakao.dto");
class UpdateKakaoDto extends (0, mapped_types_1.PartialType)(create_kakao_dto_1.CreateKakaoDto) {
}
exports.UpdateKakaoDto = UpdateKakaoDto;
//# sourceMappingURL=update-kakao.dto.js.map