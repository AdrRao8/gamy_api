import { BaseEntity, Column, Entity,JoinColumn,ManyToOne,OneToMany,OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Availability } from "./Availability";
import { Level } from "./Level";
import { Person } from "./Person";
import { Position } from "./Position";
import { Sport } from "./Sport";
import { User } from "./User";
import { Valuation } from "./Valuation";

@Entity()
export class Player extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    abilities: string

    @Column()
    notifications: boolean

    @ManyToOne(() => Person, (person) => person.player)
    person: Person

    @ManyToOne(() => Sport, (sport) => sport.player)
    sport: Sport

    @ManyToOne(() => Position, (position) => position.player)
    position: Position

    @ManyToOne(() => Level, (level) => level.player)
    level: Level

    @ManyToOne(() => Valuation, (valuation) => valuation.player)
    valuation: Valuation

}