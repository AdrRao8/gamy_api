import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";

@Entity()

export class Level extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(() => Player, (player) => player.level)
    player: Player[]

}