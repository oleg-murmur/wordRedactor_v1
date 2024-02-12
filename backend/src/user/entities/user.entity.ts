import { UUID } from "crypto";
import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'User'})

export class User {

    @PrimaryColumn({type:"uuid",unique: true, nullable: false})
    @Generated("uuid")
    id: UUID;

    @Column({unique: true, nullable: false})
    email: string;
 
    @Column({type: 'text'})
    password: string;

    @Column({type: 'boolean', default: false})
    isAdmin: boolean;
}
