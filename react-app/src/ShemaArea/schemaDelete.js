import { gql } from 'apollo-boost'

export const DELETE_USER_INPUT_VALUE = gql`
  mutation deleteUser(
    $id: ID
  ) {
    deleteUser(id: $id) {
      id
    }
  }
`
