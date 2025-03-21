import React, { createContext, useState } from 'react'
export const UserDataContext = createContext()

function UserContext({children}) {
    const [user, setuser] = useState(null)
  return (
 <>
 <UserDataContext.Provider value={{user,setuser}}>
 {children}
 </UserDataContext.Provider>
 </>
  )
}

export default UserContext