import React from 'react'
import { DELETE_USER_INPUT_VALUE } from '../ShemaArea/schemaDelete'
import { useMutation } from '@apollo/react-hooks'
export const ButtonDelete = ({ isId }) => {
  const [deleteUser, { error }] = useMutation(DELETE_USER_INPUT_VALUE)

  const deleteUsers = () => {
    deleteUser({
      variables: {
        id: isId,
      },
    })
    if (error) {
      console.log(error)
    }
  }

  return <button onClick={deleteUsers}>delete user</button>
}

export default ButtonDelete
