import {gql} from 'apollo-server'


const typeDefs=gql`
    
    type Book{
        id:ID!
        url:String!
        name:String!
        isbn:String!
        authors:[String!]!
        numberOfPages:Int!
        publisher:String!
        country:String! 
        mediaType:String!
        released:String!
        characters:[String!]!
        povCharacters:[String!]!
    }

    type Character{
        id:ID!
        url:String!
        name:String
        gender:String!
        culture:String!
        born:String!
        died:String!
        titles:[String!]!
        aliases:[String!]!
        father:String!
        mother:String!
        spouse:String!
        allegiances:[String!]!
        books:[String!]!
        povBooks:[String!]!
        tvSeries:[String!]!
        playedBy:[String!]!
    }

    type House{
        id:ID!  
        url:String!
        name:String!
        region:String!
        coatOfArms:String!
        words:String
        titles:[String!]!
        seats:[String!]!
        currentLord:String!
        heir:String!
        overlord:String!
        founded:String!
        founder:String!
        diedOut:String!
        ancestralWeapons:[String!]!
        cadetBranches:[String!]!
        swornMembers:[String!]!
    }
   
    type Query{
       
        books:[Book!]!
        characters:[Character!]!
        houses:[House!]!
        book(name:String!):Book!
        character(name:String!):Character!
        house(name:String!):Character!
    }

    input CreateBookInput{
        url:String!
        name:String!
        isbn:String!
        authors:[String!]!
        numberOfPages:Int!
        publisher:String!
        country:String! 
        mediaType:String!
        released:String!
        characters:[String!]!
        povCharacters:[String!]!
    }

    input UpdateBookInput{
        name:String!
        isbn:String!
        url:String!
    }
    type Mutation{
        createBook(input:CreateBookInput!):Book
        updateBook(input:UpdateBookInput!):Book
        deleteBook(name:String!):Book
      }

`;

export {typeDefs};