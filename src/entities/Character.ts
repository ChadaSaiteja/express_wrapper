
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Character{

    @ObjectIdColumn()
    id:ObjectId

    @Column()
    url:string

    @Column()
    name:string

    @Column()
    gender:string

    @Column()
    culture:string

    @Column()
    born:string

    @Column()
    died:string

    @Column()
    titles:string[]

    @Column()
    aliases:string[]

    @Column()
    father:String

    @Column()
    mother:string

    @Column()
    spouse:string

    @Column()
    allegiances:string[]

    @Column()
    books:string[]

    @Column()
    povBooks:string[]

    @Column()
    tvSeries:string[]

    @Column()
    playedBy:string[]


}