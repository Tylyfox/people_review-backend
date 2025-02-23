import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Gender {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}