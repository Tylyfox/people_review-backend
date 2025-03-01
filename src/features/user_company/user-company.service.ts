import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCompany } from './user-company.entity';

@Injectable()
export class UserCompanyService {
  constructor(
    @InjectRepository(UserCompany)
    private readonly userCompanyRepository: Repository<UserCompany>,
  ) {}

  async findAll(): Promise<UserCompany[]> {
    return this.userCompanyRepository.find({ relations: ['user', 'company'] });
  }
}
