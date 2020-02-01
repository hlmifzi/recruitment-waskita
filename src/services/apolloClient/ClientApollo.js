import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from "./resolvers";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache()

const ClientApollo = new ApolloClient({
  cache,
  uri: 'https://graphql-pokemon.now.sh/',
  typeDefs,
  resolvers
});


cache.writeData({
  data: {
    isLoggedIn: false,
    cartItems: []
  }
});

export default ClientApollo