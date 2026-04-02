"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollectDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_collect_dto_1 = require("./create-collect.dto");
class UpdateCollectDto extends (0, mapped_types_1.PartialType)(create_collect_dto_1.CreateCollectDto) {
}
exports.UpdateCollectDto = UpdateCollectDto;
//# sourceMappingURL=update-collect.dto.js.map