import React from 'react'
import ChatBox from './ChatBox'
import { socket } from './socket'

export default function Chats() {
  const [ chats,setChats ] = React.useState([]);
  React.useEffect(()=>{
    socket.on('receiver-message',(message)=>{
      message.userType = 'receiver'
    setChats((chats)=>{
    return [...chats,message]
    });
  })
  socket.on('message-sent',(message)=>{
    message.userType = 'sender';
    message.user = 'You';
    setChats((chats)=>{
      return [...chats,message]
    })
  })
  },[])
  return (
    <div className='Chats'>
      {chats.map((chat)=><ChatBox type={chat.userType} message = {chat.message} user={chat.user}/>)
      }
    </div>
  )
}
