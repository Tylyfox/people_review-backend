import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';
import { Weather } from './weather.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [WeatherService, WeatherResolver],
})
export class WeatherModule {}
