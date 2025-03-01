import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Company } from '../company/company.entity';

export enum UserRole {
  OWNER = 'OWNER',
  EMPLOYEE = 'EMPLOYEE',
  ADMIN = 'ADMIN',
}

@Entity()
@ObjectType()
export class UserCompany {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => User, (user) => user.userCompanies, { onDelete: 'CASCADE' })
  @Field(() => User)
  user: User;

  @ManyToOne(() => Company, (company) => company.userCompanies, {
    onDelete: 'CASCADE',
  })
  @Field(() => Company)
  company: Company;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.EMPLOYEE })
  @Field(() => String)
  role: UserRole;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
