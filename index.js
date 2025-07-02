import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


//typeDefs

import { typeDefs } from "./schema.js";

import _db from "./_db.js";

//server setup

//resolvers
const resolvers={
    Query:{
        games(){
            return _db.games
        },
        reviews(){
            return _db.reviews
        },
        authors(){
            return _db.authors
        },
        review(_,args){
            return _db.reviews.find((review)=>review.id===args.id)
        }

    }
}
const server=new ApolloServer({
    typeDefs,
    resolvers
})

const {url}= await startStandaloneServer(server,{
    listen:{port: 4000}
})

console.log("port running on 4000",4000)