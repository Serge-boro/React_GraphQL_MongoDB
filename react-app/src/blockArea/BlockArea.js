import React, { useState, useEffect } from 'react'
import { RENDER_USER_INPUT_VALUE } from '../ShemaArea/schemaRender'
import { useQuery } from '@apollo/react-hooks'

export const BlockArea = () => {
  const { data, loading } = useQuery(RENDER_USER_INPUT_VALUE)
  const [isData, setIsData] = useState([])

  useEffect(() => {
    if (data) {
      setIsData(data.users)
    }
  }, [data])

  console.log(isData)

  return (
    <>
      {isData.map((item) => {
        const { id, name, email, password } = item
        return (
          <div key={id}>
            <p>
              {name} {email} {password}
            </p>
            <p>{id}</p>
          </div>
        )
      })}
    </>
  )
}
export default BlockArea
