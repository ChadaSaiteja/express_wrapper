import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema/type-defs'
import { resolvers } from './schema/resolvers'
import AppDataSourc from './ormconfig';


const server=new ApolloServer({typeDefs,resolvers});



AppDataSourc.initialize()
            .then(()=>{
                console.log("Db connected")
                
                server.listen().then(({url})=>{
                    console.log(`API is running on ${url}`)
                    
                });
               
            })
            .catch((err)=>
            {
                console.log(err)
            })
 