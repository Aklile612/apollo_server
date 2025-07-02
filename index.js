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
        game(_,args){
            return _db.games.find((game)=>game.id===args.id)
        },
        reviews(){
            return _db.reviews
        },
        review(_,args){
            return _db.reviews.find((review)=>review.id===args.id)
        },
        authors(){
            return _db.authors
        },
        author(_,args){
            return _db.authors.find((author)=>author.id===args.id)
        }
    },
    Game:{
        reviews(parent){
            return _db.reviews.filter((r)=>r.gameId===parent.id)
        }
    },
    Author:{
        reviews(parent){
            return _db.reviews.filter((r)=>r.authorId===parent.id)
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