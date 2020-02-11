import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from "../../pages/auth/graphql/AuthResolvers";
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
    isLoggedIn: localStorage.getItem("token"),
    isAdmin: false,
    cartItems: []
  }
});

export default ClientApollo