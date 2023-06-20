import AppDataSourc from "../ormconfig";
import { Book } from "../src/entities/Book";
import { Character } from "../src/entities/Character";
import { House } from "../src/entities/House";


const resolvers={
    Query:{
        
        books: async()=>{
            const books=await AppDataSourc.getMongoRepository(Book).find()
            return books;
        },
        houses: async() => {
            const houses=await AppDataSourc.getMongoRepository(House).find()
            return houses;
        },
        characters: async() => {
            const characters=await AppDataSourc.getMongoRepository(Character).find()
            return characters;
        },
        book:async (parent:any,args:any) => {
         
            const book=await AppDataSourc.getMongoRepository(Book).findOne({where:{name:args.name}})
            return book;
        },
        house:async(parent:any,args:any)=>{

            const house=await AppDataSourc.getMongoRepository(House).findOne({where:{name:args.name}})
            return house;
        },
        character:async(parent:any,args:any)=>{
    
            const character=await AppDataSourc.getMongoRepository(Character).findOne({where:{name:args.name}})
            return character;
        }
    },
    
    Mutation:{
        createBook:async(parent:any,args:any)=>{
            const newBook=await AppDataSourc.getMongoRepository(Book).save(args.input)
            return newBook;
        },
        updateBook:async(parent:any,args:any)=>{
            const {name,isbn,url}=args.input
            const updatedBook=await AppDataSourc.getMongoRepository(Book)
                                                .findOneAndUpdate({name:name},{$set:{url:url,isbn:isbn}})
                                                .then(result=>result.value)
            return updatedBook
        }
        ,
        deleteBook:async(parent:any,args:any)=>
        {   
            const deletedBook=await AppDataSourc.getMongoRepository(Book).delete({name:args.name});
            return null;
        }
        

    }
}


export {resolvers};