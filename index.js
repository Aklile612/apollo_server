import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


//typeDefs

import { typeDefs } from "./schema";

import _db from "./_db";

//server setup

//resolvers
const resolvers={
    Query:{
        games(){
            return _db.games
        }
    }
}
const server=new ApolloServer({

})

const {url}= await startStandaloneServer(server,{
    listen:{port: 4000}
})

console.log("port running on 4000",4000)