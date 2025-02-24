import { Injectable } from "@nestjs/common";
import { BaseSeeder } from "../base.seeder";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Gender } from "src/features/gender/gender.entity";

@Injectable()
export class GenderSeeder extends BaseSeeder {
    constructor(
        @InjectRepository(Gender)
        private readonly genderRepository: Repository<Gender>
    ) {
        super();
    }

    async seed(): Promise<void> {
        const genders = [
            { name: 'Femme'},
            { name : 'Homme'}
        ];

        const countInDb = await this.genderRepository.count();
        if (countInDb === genders.length) {
            const existingGenders = await this.genderRepository.find();
            const allMatch = genders.every(gender => 
                existingGenders.some(existingGender => 
                    existingGender.name === gender.name)
            )
            if (allMatch) {
                console.log('Gender data is already up to date.');
                return;
            }
        }
        await this.genderRepository.save(genders);
        console.log('Gender data seeded/updated successfully!');
    }
}