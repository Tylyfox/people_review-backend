import { Module } from '@nestjs/common';
import { GenderModule } from 'src/features/gender/gender.module';
import { WeatherModule } from 'src/features/weather/weather.module';
import { KnowledgeLevelModule } from './knowledge_level/knowledge_level.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { UserCompanyModule } from './user_company/user-company.module';

@Module({
  imports: [
    GenderModule,
    WeatherModule,
    KnowledgeLevelModule,
    UserModule,
    CompanyModule,
    UserCompanyModule,
  ],
  exports: [
    GenderModule,
    WeatherModule,
    KnowledgeLevelModule,
    UserModule,
    CompanyModule,
    UserCompanyModule,
  ],
})
export class FeaturesModule {}
