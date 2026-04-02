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
exports.CollectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const collect_entity_1 = require("./entities/collect.entity");
const typeorm_2 = require("typeorm");
let CollectService = class CollectService {
    collectRepository;
    constructor(collectRepository) {
        this.collectRepository = collectRepository;
    }
    async saveMessage(createCollectDto) {
        const collect = this.collectRepository.create(createCollectDto);
        return await this.collectRepository.save(collect);
    }
    async saveKakaoMessage(payload) {
        const channelUserId = payload?.userRequest?.user?.id;
        const message = payload?.userRequest?.utterance;
        if (!channelUserId || !message) {
            return null;
        }
        const collect = this.collectRepository.create({
            channelUserId,
            message,
        });
        return await this.collectRepository.save(collect);
    }
    async findAll() {
        return await this.collectRepository.find({
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        return await this.collectRepository.findOne({
            where: { id },
        });
    }
};
exports.CollectService = CollectService;
exports.CollectService = CollectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(collect_entity_1.Collect)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CollectService);
//# sourceMappingURL=collect.service.js.map