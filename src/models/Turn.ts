import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Availability } from "./Availability";

@Entity()

export class Turn extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    start_time: number;

    @Column()
    end_time: number;

    @OneToMany(() => Availability, (availability) => availability.turn)
    availability: Availability[]
}