<p align="center">
  <a href="https://apopsys.fr/" target="blank"><img src="https://apopsys.fr/images/apopsys-logo-1200x630.jpg" width="120" alt="Nest Logo" /></a>
</p>

## Description

La description du projet 

## Project setup

```bash
$ yarn install
```

## Compile and run the project

Run the project in development mode to automatically rebuild the app when files change.

```bash
# Development mode
$ yarn run start:dev
```
```bash
# Production mode
$ yarn run start:dev
```
```bash
# Watch mode
$ yarn run start:dev
```
## Docker setup

This project comes with a Dockerfile and a docker-compose.yml to allow easy containerization. Follow these steps to set up and run the project using Docker:
```bash
# Build the Docker containers
$ docker compose build
```
```bash
# Start the services (backend, database, adminer)
$ docker compose up
```
## Environment variables

To configure the application, create a **.env.local** file in the root of your project with the following environment variables:

```ini
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=dev_user
DB_PASSWORD=dev_password
DB_NAME=dev_db
```
Make sure to update these values as per your configuration.

## Deployment

For production deployment, ensure your environment is set up with the necessary environment variables (e.g., database credentials, API keys). You can also use platforms like AWS or Heroku to deploy the backend easily.

For more details, please check the official NestJS deployment documentation.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Valentin Cadart](https://www.linkedin.com/in/valentin-cadart-d%C3%A9veloppeur-full-stack-js-93762b161/)
- Website - [https://apopsys.fr/](https://apopsys.fr/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
