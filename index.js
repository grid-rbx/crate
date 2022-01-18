const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios')
const types = require("./typeDefs")

const url = "roproxy"

const typeDefs = gql(types)

const resolvers = {
    Query: {
        async user(parent, args, context, info) {
            const { data } = await axios.get(`https://users.${url}.com/v1/users/${args.id}`);
            return data
          },
        async validateDisplayName(parent, args, context, info) {
            const response = await axios.get(`https://users.${url}.com/v1/display-names/validate?displayName=${args.displayName}&birthdate=${args.birthdate}`);
            return { status: response.status }
        }
    },
}

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});