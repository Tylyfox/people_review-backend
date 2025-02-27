import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/features/user/user.entity';
import { Weather } from 'src/features/weather/weather.entity';
import { KnowledgeLevel } from 'src/features/knowledge_level/knowledge_level.entity';
import { Gender } from 'src/features/gender/gender.entity';

export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [User, Weather, KnowledgeLevel, Gender],
  synchronize: configService.get<string>('NODE_ENV') !== 'production',
  autoLoadEntities: true,
});
