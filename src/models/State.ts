import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventApply } from "./EventApply";
import { PreEvent } from "./PreEvent";

@Entity()

export class State extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToOne(() => PreEvent)
    preEvent: PreEvent;

    @OneToOne(() => EventApply)
    eventApply: EventApply;

}