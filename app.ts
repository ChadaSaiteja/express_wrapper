import express,{Request,Response} from 'express'
import axios, { AxiosResponse } from 'axios'
import AppDataSourc from './ormconfig'
import { House } from './src/entities/House'
import { Book } from './src/entities/Book'
import dotenv from 'dotenv'
import { Character } from './src/entities/Character'
import { ApolloServer } from 'apollo-server'

dotenv.config()

const app=express()
const baseurl="https://www.anapioficeandfire.com/api/"

app.get("/",async(req:Request,res:Response)=>{

    try{
        const url=baseurl
        console.log(url)
        const result:any=await axios.get(url)
        if(result.status!==200)
            return res.send("Failed")
        
        const oper=result.data
        console.log(oper)
        res.send(result.data)
    }
    catch(err)
    {
        res.send("failed")
    }
})
app.get("/:type",async(req:Request,res:Response)=>{
    const repo=AppDataSourc.getMongoRepository(Character)
    try{
        let url=baseurl+req.params.type
       
        for(let i=1996;i<2150;i++)
        {
            let url=baseurl+req.params.type+`/${i}`
            console.log(url)
            const result:AxiosResponse=await axios.get(url)
            if(result.status===404)
            {  break}

            await repo.save(result.data);
        }

        res.send("inserted")
    }
    catch(err)
    {
        res.send(err)
    }
})



app.get('/:type/:id',async(req:Request,res:Response)=>{
    const repo=AppDataSourc.getMongoRepository(Character)

    try{

        const url=baseurl+req.params.type+"/"+req.params.id
        console.log(url)
        const result:any=await axios.get(url)
        console.log(result.data)

        if(result.status==200){
            const saved=await repo.save(result.data)
            // console.log(saved)
            return res.send("H")}


        res.send("Failed")
    }
    catch(err)
    {
        res.send("failed")
    }
})




// const server=new ApolloServer({})




AppDataSourc.initialize()
            .then(()=>{
                console.log("Db connected")
                app.listen(process.env.PORT,()=>{
                    console.log(`server running on ....`)
                })
               
            })
            .catch((err)=>
            {
                console.log(err)
            })
 