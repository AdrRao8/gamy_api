import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Day } from "./Day";
import { Person } from "./Person";
import { Turn } from "./Turn";

@Entity()

export class Availability extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number
/*
    @Column()
    description: string
*/
    
    @ManyToOne(() => Person, (person) => person.availability)
    person: Person

    @ManyToOne(() => Day, (day) => day.availability)
    day: Day

    @ManyToOne(() => Turn, (turn) => turn.availability)
    turn: Turn

}