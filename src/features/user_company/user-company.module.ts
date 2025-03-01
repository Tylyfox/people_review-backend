import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCompany } from './user-company.entity';
import { UserCompanyService } from './user-company.service';
import { UserCompanyResolver } from './user-company.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserCompany])],
  providers: [UserCompanyService, UserCompanyResolver],
})
export class UserCompanyModule {}
