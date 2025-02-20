import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {databaseConfig} from './config/database.config';
import { SeederModule } from './seeds/modules/seeder.module';
import { GlobalSeeder } from './seeds';

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
    SeederModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly globalSeeder: GlobalSeeder) {}

  async onModuleInit() {
    // Appel de la méthode de seeding globale
    await this.globalSeeder.seed();
  }
}
