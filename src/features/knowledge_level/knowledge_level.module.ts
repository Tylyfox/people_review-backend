import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KnowledgeLevel } from "./knowledge_level.entity";
import { KnowledgeLevelService } from "./knowledge_level.service";
import { KnowledgeLevelResolver } from "./knowledge_level.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([KnowledgeLevel])],
    providers: [KnowledgeLevelService, KnowledgeLevelResolver],
})
export class KnowledgeLevelModule {}