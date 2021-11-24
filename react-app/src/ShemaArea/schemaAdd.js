import { gql } from 'apollo-boost'

export const ADD_USER_INPUT_VALUE = gql`
  mutation addUser($name: String!, $email: String!, $password: String) {
    addUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`
