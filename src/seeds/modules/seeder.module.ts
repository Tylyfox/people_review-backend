import { Module } from '@nestjs/common';
import { WeatherSeeder, KnowledgeLevelSeeder,  GenderSeeder} from 'src/seeds';
import { GlobalSeeder } from 'src/seeds'; // Assure-toi d'avoir le bon chemin
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from '../../features/weather/weather.entity';
import { KnowledgeLevel } from 'src/features/knowledge_level/knowledge_level.entity';  
import { Gender } from 'src/features/gender/gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Weather, KnowledgeLevel, Gender])],
  providers: [WeatherSeeder, KnowledgeLevelSeeder, GenderSeeder, GlobalSeeder],
  exports: [GlobalSeeder],
})
export class SeederModule {}
