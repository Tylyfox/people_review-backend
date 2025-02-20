import { Injectable } from '@nestjs/common';
import { WeatherSeeder } from './entities/weather.seed';
import { KnowledgeLevelSeeder } from './entities/knowledge_level.seed';
import { BaseSeeder } from './base.seeder';

@Injectable()
export class GlobalSeeder {
  private seeders: BaseSeeder[];

  constructor(
    private readonly weatherSeeder: WeatherSeeder,
    private readonly knowledgeLevelSeeder: KnowledgeLevelSeeder,
  ) {
    // Collecte tous les seeders spécifiques dans un tableau
    this.seeders = [this.weatherSeeder, this.knowledgeLevelSeeder];
  }

  async seed(): Promise<void> {
    for (const seeder of this.seeders) {
      await seeder.seed();
    }
  }
}
