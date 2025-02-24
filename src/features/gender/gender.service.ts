import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Gender } from "src/features/gender/gender.entity";
import { Repository } from "typeorm";

@Injectable()
export class GenderService {
    constructor(
        @InjectRepository(Gender)
        private readonly genderRepository: Repository<Gender>
    ) {}

    async findAll(): Promise<Gender[]> {
        return this.genderRepository.find();
    }
  
};