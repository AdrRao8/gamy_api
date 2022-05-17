import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";
import { Position } from "./Position";

@Entity()

export class Sport extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string
  
    @Column()
    capacity: number

    @OneToMany(() => Position, (position) => position.sport)
    positions: Position[]

    @OneToMany(() => Player, (player) => player.sport)
    player: Player[]
}