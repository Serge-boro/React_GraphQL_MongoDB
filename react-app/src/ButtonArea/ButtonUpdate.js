import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_USER_INPUT_VALUE } from '../ShemaArea/schemaUpdate'
const ButtonUpdate = ({ isId, isName, isEmail, isPassword }) => {
  const [updateUser, { error }] = useMutation(UPDATE_USER_INPUT_VALUE)
  const updateUsers = () => {
    updateUser({
      variables: {
        id: isId,
        name: isName,
        email: isEmail,
        password: isPassword,
      },
    })
    if (error) {
      console.log(error)
    }
  }

  return <button onClick={updateUsers}>update</button>
}
export default ButtonUpdate
