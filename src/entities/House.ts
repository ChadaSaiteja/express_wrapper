import { Column, Entity, ObjectId, ObjectIdColumn} from "typeorm";



@Entity()
export class House{

    @ObjectIdColumn()
    id:ObjectId

    @Column()
    url:string

    @Column()
    name:string

    @Column()
    region:string

    @Column()
    coatOfArms:string

    @Column()
    words:string

    @Column()
    titles:string[]

    @Column()
    seats:string[]

    @Column()
    currentLord:string

    @Column()
    heir:string

    @Column()
    overlord:string

    @Column()
    founded:string

    @Column()
    founder:string

    @Column()
    diedOut:string

    @Column()
    ancestralWeapons:string[]

    @Column()
    cadetBranches:string[]

    @Column()
    swornMembers:string[]

}