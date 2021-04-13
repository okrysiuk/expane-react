import { gql } from "@apollo/client";

export const LOAD_CLIENTS = gql`
query {
  getClients{
    id
    firstName
    lastName
    phone
    avatarUrl
  }
}
`;