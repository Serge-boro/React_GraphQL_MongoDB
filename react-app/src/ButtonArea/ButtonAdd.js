import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ADD_USER_INPUT_VALUE } from '../ShemaArea/schemaAdd'

const ButtonAdd = ({ isName, isEmail, isPassword }) => {
  const [addUser, { error }] = useMutation(ADD_USER_INPUT_VALUE)
  const addUsers = () => {
    addUser({
      variables: {
        name: isName,
        email: isEmail,
        password: isPassword,
      },
    })
    if (error) {
      console.log(error)
    }
  }
  return <button onClick={addUsers}>add user</button>
}

export default ButtonAdd
