import { BaseEntity, Column, Entity,JoinColumn,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";
import { PreEvent } from "./PreEvent";
import { State } from "./State";

@Entity()
export class PreEventApply extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ length: 1 })
    origin: String

    @OneToOne(() => State)
    @JoinColumn()
    state: State
    
    @OneToOne(() => PreEvent)
    @JoinColumn()
    preEvent: PreEvent

    @OneToOne(() => Player)
    @JoinColumn()
    player: Player
}