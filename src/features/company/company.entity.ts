import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserCompany } from '../user_company/user-company.entity';

@Entity()
@ObjectType()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => UserCompany, (userCompany) => userCompany.company)
  @Field(() => [UserCompany])
  userCompanies: UserCompany[];
}
