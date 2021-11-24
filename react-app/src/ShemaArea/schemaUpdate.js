import { gql } from 'apollo-boost'

export const UPDATE_USER_INPUT_VALUE = gql`
  mutation updateUser(
    $id: ID
    $name: String!
    $email: String!
    $password: String!
  ) {
    updateUser(id: $id, name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`
