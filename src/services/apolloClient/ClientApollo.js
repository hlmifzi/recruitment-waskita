import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from "../../pages/auth/graphql/AuthResolvers";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache()

const ClientApollo = new ApolloClient({
  cache,
  uri: 'http://178.128.103.128:8000/graphql/',
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