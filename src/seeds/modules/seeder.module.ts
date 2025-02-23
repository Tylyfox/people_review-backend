import { Module } from '@nestjs/common';
import { WeatherSeeder, KnowledgeLevelSeeder,  GenderSeeder} from 'src/seeds';
import { GlobalSeeder } from 'src/seeds'; // Assure-toi d'avoir le bon chemin
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from '../../entities/weather.entity';
import { KnowledgeLevel } from 'src/entities/knowledge_level.entity';  
import { Gender } from 'src/entities/gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Weather, KnowledgeLevel, Gender])],
  providers: [WeatherSeeder, KnowledgeLevelSeeder, GenderSeeder, GlobalSeeder],
  exports: [GlobalSeeder],
})
export class SeederModule {}
