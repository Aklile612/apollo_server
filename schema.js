export const typeDefs=`#graphql
    type Game{
        id:ID!
        title: String!
        platform: [String!]!
        reviews:[Review!]   

    }
    type Review {
        id:ID!
        rating:Int!
        content:String!
        author:Author!
        game:Game!
    }
    type Author {
        id:ID!
        name:String!
        verfied:Boolean
        reviews:[Review!]
    }
    type Query{
        reviews:[Review]
        review(id: ID!):Review
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
    }
    type Mutation{
        addGame(game:AddGameInput!):Game
        deleteGame(id: ID!):[Game]
    }
    input AddGameInput{
        title:String!,
        platform:[String!]!
    }

`