import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {databaseConfig} from './config/database.config';
import { SeederModule } from './seeds/modules/seeder.module';
import { GlobalSeeder } from './seeds';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { graphqlConfig } from './config/graphql.config';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: databaseConfig,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    SeederModule,
    FeaturesModule,
  ],
 
})

export class AppModule implements OnModuleInit {
  constructor(private readonly globalSeeder: GlobalSeeder) {}

  async onModuleInit() {
    await this.globalSeeder.seed();
  }
}
