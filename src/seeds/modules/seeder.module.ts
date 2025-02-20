import { Module } from '@nestjs/common';
import { WeatherSeeder } from 'src/seeds';
import { KnowledgeLevelSeeder } from 'src/seeds';
import { GlobalSeeder } from 'src/seeds'; // Assure-toi d'avoir le bon chemin
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from '../../entities/weather.entity';
import { KnowledgeLevel } from 'src/entities/knowledge_level.entity';  

@Module({
  imports: [TypeOrmModule.forFeature([Weather, KnowledgeLevel])],
  providers: [WeatherSeeder, KnowledgeLevelSeeder, GlobalSeeder],
  exports: [GlobalSeeder],
})
export class SeederModule {}
