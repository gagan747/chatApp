import React from 'react'
import UserInput from './UserInput'
import Chats from './Chats'
import { createContext, useState, useEffect } from "react";
export const UserContext = createContext()

export default function Container() {
  useEffect(()=>{
    const fullName = window.prompt('Enter your full name','Anoynomous');
    if(fullName)
      setUser(fullName)
  },[])
  const [ user,setUser ] = useState('Anoynomous')
  return (
    <UserContext.Provider value={user}>
    <div className='container'>
      <Chats />
      <UserInput />
    </div>
    </UserContext.Provider>
  )
}
