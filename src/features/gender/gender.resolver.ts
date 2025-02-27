import { Query, Resolver } from '@nestjs/graphql';
import { Gender } from 'src/features/gender/gender.entity';
import { GenderService } from 'src/features/gender/gender.service';

@Resolver()
export class GenderResolver {
  constructor(private readonly genderService: GenderService) {}

  @Query(() => [Gender])
  async genders(): Promise<Gender[]> {
    return this.genderService.findAll();
  }
}
