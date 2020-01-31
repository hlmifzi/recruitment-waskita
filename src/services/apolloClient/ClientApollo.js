import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const ClientApollo = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
});

export default ClientApollo