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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collect = void 0;
const typeorm_1 = require("typeorm");
let Collect = class Collect {
    id;
    channelUserId;
    message;
    createdAt;
    updatedAt;
};
exports.Collect = Collect;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Collect.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, comment: '카카오 채널 사용자 식별값' }),
    __metadata("design:type", String)
], Collect.prototype, "channelUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '사용자 메시지' }),
    __metadata("design:type", String)
], Collect.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '생성일시',
    }),
    __metadata("design:type", Date)
], Collect.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '수정일시',
    }),
    __metadata("design:type", Date)
], Collect.prototype, "updatedAt", void 0);
exports.Collect = Collect = __decorate([
    (0, typeorm_1.Entity)('collect')
], Collect);
//# sourceMappingURL=collect.entity.js.map