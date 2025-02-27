import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

export const graphqlConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  playground: false,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
};
