import { Query, Resolver } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { Weather } from './weather.entity';

@Resolver()
export class WeatherResolver {
  constructor(private readonly WeatherService: WeatherService) {}

  @Query(() => [Weather])
  async weathers(): Promise<Weather[]> {
    return this.WeatherService.findAll();
  }
}
