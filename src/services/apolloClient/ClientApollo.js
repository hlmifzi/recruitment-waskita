import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from "../../pages/auth/graphql/AuthResolvers";
import { InMemoryCache } from "apollo-cache-inmemory";
import { developmentHost, productionHost } from '../main/MainServices'

const cache = new InMemoryCache()
const ClientApollo = new ApolloClient({
  cache,
  uri: `${process.env.NODE_ENV === "development" ? developmentHost : productionHost}/graphql/`,
  typeDefs,
  resolvers
});


cache.writeData({
  data: {
    isLoggedIn: localStorage.getItem("token") || false,
    isAdmin: localStorage.getItem("isAdmin"),
    userId: localStorage.getItem("id"),
    isAlreadyUpload: localStorage.getItem("isAlreadyUpload") === "true"
  }
});

export default ClientApollo