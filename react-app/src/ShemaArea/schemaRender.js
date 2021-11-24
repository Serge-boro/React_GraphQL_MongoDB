import { gql } from 'apollo-boost'

export const RENDER_USER_INPUT_VALUE = gql`
  query users {
    users {
      id
      name
      email
      password
    }
  }
`
