import React, { useContext } from 'react'
import UserContext from '../Context/context'
function One() {
    const user = useContext(UserContext)
  return (
    <div>
        {console.log(user)}
      <h1>One</h1>
    </div>
  )
}

export default One
