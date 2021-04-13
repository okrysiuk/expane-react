import { gql } from "@apollo/client";

export const ADD_CLIENT_MUTATION = gql`
  mutation addClient(
    $firstName: String!
    $lastName: String!
    $phone: String
    $avatarUrl: String
  ) {
    addClient(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      avatarUrl: $avatarUrl
    ) {
      id
    }
  }
`;
