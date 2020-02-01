import ApolloClient from 'apollo-boost';

const ClientApollo = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
});

export default ClientApollo