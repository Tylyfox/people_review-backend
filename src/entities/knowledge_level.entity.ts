import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class KnowledgeLevel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    rating: number;

    @Column()
    name: string;

    @Column()
    description: string;
}