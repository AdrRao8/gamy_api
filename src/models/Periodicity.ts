import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PreEvent } from "./PreEvent";

@Entity()

export class Periodicity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @OneToOne(()=>PreEvent)
    preEvent: PreEvent;
}