import React, { useState } from 'react'
import ButtonUpdate from '../ButtonArea/ButtonUpdate'
import ButtonAdd from '../ButtonArea/ButtonAdd'
import ButtonDelete from '../ButtonArea/ButtonDelete'
const FormArea = () => {
  const [isId, setIsId] = useState('')
  const [isName, setIsName] = useState('')
  const [isEmail, setIsEmail] = useState('')
  const [isPassword, setIsPassword] = useState('')

  return (
    <form>
      <input
        className='inputForm'
        type='text'
        placeholder='please, put the name'
        value={isName}
        onChange={(e) => setIsName(e.target.value)}
      />
      <input
        className='inputForm'
        type='text'
        placeholder='please, put the email'
        value={isEmail}
        onChange={(e) => setIsEmail(e.target.value)}
      />
      <input
        className='inputForm'
        type='text'
        placeholder='your favorite number'
        value={isPassword}
        onChange={(e) => setIsPassword(e.target.value)}
      />
      <ButtonAdd
        isId={isId}
        isName={isName}
        isEmail={isEmail}
        isPassword={isPassword}
      />
      <ButtonUpdate
        isId={isId}
        isName={isName}
        isEmail={isEmail}
        isPassword={isPassword}
      />
      <ButtonDelete isId={isId} />
      <input
        className='inputForm'
        type='text'
        placeholder='please, put the ID'
        value={isId}
        onChange={(e) => setIsId(e.target.value)}
      />
    </form>
  )
}

export default FormArea
