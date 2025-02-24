import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { KnowledgeLevel } from "./knowledge_level.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class KnowledgeLevelService {
    constructor(
        @InjectRepository(KnowledgeLevel)
        private readonly KnowledgeLevelRepository: Repository<KnowledgeLevel>) {}

    async findAll(): Promise<KnowledgeLevel[]> {
        return this.KnowledgeLevelRepository.find();
    }
}