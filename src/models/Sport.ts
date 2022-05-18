import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Level } from "./Level";
import { Player } from "./Player";
import { Position } from "./Position";
import { PreEvent } from "./PreEvent";

@Entity()

export class Sport extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string
  
    @Column({
        nullable: true,
    })
    capacity: number

    @OneToMany(() => Position, (position) => position.sport)
    positions: Position[]

    @OneToMany(() => Player, (player) => player.sport)
    player: Player[]

    @OneToOne(()=>PreEvent)
    preEvent: PreEvent;

    @OneToMany(() => Level, (level) => level.sport)
    level: Level[]
}