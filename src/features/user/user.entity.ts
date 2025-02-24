import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User {

    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id: string;

    @Column()
    @Field()
    firstName: string;

    @Column()
    @Field()
    lastName: string;

    @Column()
    password: string;

    @CreateDateColumn({ type: "timestamp" })
    @Field()
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    @Field()
    updatedAt: Date;

    @BeforeInsert()
    async hashPassword() {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
}
