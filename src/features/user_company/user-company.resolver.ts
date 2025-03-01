import { Resolver, Query } from '@nestjs/graphql';
import { UserCompany } from './user-company.entity';
import { UserCompanyService } from './user-company.service';

@Resolver(() => UserCompany)
export class UserCompanyResolver {
  constructor(private readonly userCompanyService: UserCompanyService) {}

  @Query(() => [UserCompany], { name: 'userCompanies' })
  async findAll(): Promise<UserCompany[]> {
    return this.userCompanyService.findAll();
  }
}
