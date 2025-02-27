import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KnowledgeLevel } from '../../features/knowledge_level/knowledge_level.entity'; // Assurez-vous du bon chemin
import { BaseSeeder } from '../base.seeder';

@Injectable()
export class KnowledgeLevelSeeder extends BaseSeeder {
  constructor(
    @InjectRepository(KnowledgeLevel)
    private readonly knowledgeLevelRepository: Repository<KnowledgeLevel>,
  ) {
    super();
  }

  async seed(): Promise<void> {
    // Données brutes
    const knowledgeLevels = [
      {
        rating: 1,
        name: 'Débute',
        description: "Connaissances de base, a besoin d'être accompagné",
      },
      {
        rating: 2,
        name: 'Occupe',
        description: 'Connaissances essentielles, autonomie partielle',
      },
      {
        rating: 3,
        name: 'Maitrise',
        description: 'Connaissances confirmées, autonomie sur le poste',
      },
      {
        rating: 4,
        name: 'Référent',
        description: 'Reconnu par ses collègues et sollicité pour des conseils',
      },
    ];

    const countInDb = await this.knowledgeLevelRepository.count();
    if (countInDb === knowledgeLevels.length) {
      // Vérifier si les données ont changé
      const existingLevels = await this.knowledgeLevelRepository.find();
      const allMatch = knowledgeLevels.every((level) =>
        existingLevels.some(
          (existingLevel) =>
            existingLevel.rating === level.rating &&
            existingLevel.name === level.name &&
            existingLevel.description === level.description,
        ),
      );
      if (allMatch) {
        console.log('Knowledge level data is already up to date.');
        return;
      }
    }

    // Si les données sont différentes ou qu'elles n'existent pas, on les insère ou les met à jour
    await this.knowledgeLevelRepository.save(knowledgeLevels);
    console.log('Knowledge level data seeded/updated successfully!');
  }
}
