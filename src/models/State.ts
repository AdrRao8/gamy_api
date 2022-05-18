import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PreEventApply } from "./PreEventApply";
import { PreEvent } from "./PreEvent";

@Entity()

export class State extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToOne(() => PreEvent)
    preEvent: PreEvent;

    @OneToOne(() => PreEventApply)
    eventApply: PreEventApply;

}