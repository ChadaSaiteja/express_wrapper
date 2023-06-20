
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";


@Entity()
export class Book{

    @ObjectIdColumn()
    id:ObjectId

    @Column()
    url:string

    @Column()
    name:string

    @Column()
    isbn:string

    @Column()
    authors:string[]

    @Column()
    numberOfPages:number

    @Column()
    publisher:string

    @Column()
    country:string

    @Column()
    mediaType:string

    @Column()
    released:string

    @Column()
    characters:string[]

    @Column()
    povCharacters:string[]

}