import { BaseEntity, Column, Entity,JoinColumn,JoinTable,ManyToMany,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Periodicity } from "./Periodicity";
import { Player } from "./Player";
import { Sport } from "./Sport";
import { State } from "./State";

@Entity()
export class PreEvent extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name: string

    @Column()
    date: Date

    @Column('time', {name: 'start_time'})
    start_time: Date;

    @Column('time', {name: 'end_time'})
    end_time: Date;

    @Column()
    description: String

    @Column()
    latitude: string

    @Column()
    logitude: string

    @OneToOne(() => State)
    @JoinColumn()
    state: State;
    
    @OneToOne(() => Sport)
    @JoinColumn()
    sport: Sport;

    @OneToOne(() => Periodicity)
    @JoinColumn()
    periodicity: Periodicity;

    @OneToOne(() => PreEvent)
    preEvent: PreEvent;
   
}