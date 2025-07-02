import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


//typeDefs

import { typeDefs } from "./schema";
//server setup
const server=new ApolloServer({

})

const {url}= await startStandaloneServer(server,{
    listen:{port: 4000}
})

console.log("port running on 4000",4000)