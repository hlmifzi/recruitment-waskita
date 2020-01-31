import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const ClientApollo = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/',
});

export const GET_POKEMON = gql`
    {
      pokemon(name: "Pikachu") {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
    `;

export default ClientApollo