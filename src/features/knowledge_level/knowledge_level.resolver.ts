import { Query, Resolver } from '@nestjs/graphql';
import { KnowledgeLevelService } from './knowledge_level.service';
import { KnowledgeLevel } from './knowledge_level.entity';

@Resolver()
export class KnowledgeLevelResolver {
  constructor(private readonly KnowledgeLevelService: KnowledgeLevelService) {}

  @Query(() => [KnowledgeLevel])
  async knowledge_levels(): Promise<KnowledgeLevel[]> {
    return this.KnowledgeLevelService.findAll();
  }
}
