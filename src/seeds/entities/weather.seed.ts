import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from '../../entities/weather.entity';  // Assurez-vous du bon chemin
import { BaseSeeder } from '../base.seeder';

@Injectable()
export class WeatherSeeder extends BaseSeeder {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {
    super();
  }

  async seed(): Promise<void> {
    // Données brutes
    const weathers = [
      { rating: 5, description: 'Ensoleillée' },
      { rating: 4, description: 'Éclaircie' },
      { rating: 3, description: 'Nuageuse' },
      { rating: 2, description: 'Pluvieuse' },
      { rating: 1, description: 'Orageuse' },
    ];

    const countInDb = await this.weatherRepository.count();
    
    if (countInDb === weathers.length) {
      // Vérifier si les données ont changé
      const existingWeathers = await this.weatherRepository.find();
      const allMatch = weathers.every(weather =>
        existingWeathers.some(existingWeather =>
          existingWeather.rating === weather.rating &&
          existingWeather.description === weather.description
        )
      );

      if (allMatch) {
        console.log('Weather data is already up to date.');
        return;
      }
    }

    // Si les données sont différentes ou qu'elles n'existent pas, on les insère ou les met à jour
    await this.weatherRepository.save(weathers);
    console.log('Weather data seeded/updated successfully!');
  }
}
