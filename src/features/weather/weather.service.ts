import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Weather } from "./weather.entity";

@Injectable()
export class WeatherService {
    constructor(
        @InjectRepository(Weather)
        private readonly weatherRepository: Repository<Weather>
    ) {}

    async findAll(): Promise<Weather[]> {
        return this.weatherRepository.find();
    }
}