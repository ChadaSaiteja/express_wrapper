import { DataSource} from "typeorm";
import path from "path";
import { House } from "./src/entities/House";
import { Book } from "./src/entities/Book";
import { Character } from "./src/entities/Character";




const AppDataSourc=new DataSource({
    type:'mongodb',
    url:"mongodb://127.0.0.1:27017/",
    host:"localhost",
    port:27017,
    database:"test",
    useNewUrlParser: true,
    useUnifiedTopology: false,
    // synchronize:true,
    logging:true,
    entities:[Book,Character,House],
    migrations:["migrations/*{.ts,.js}"]
    
})


export default AppDataSourc;