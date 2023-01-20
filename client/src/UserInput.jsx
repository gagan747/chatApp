import React,{ useContext } from 'react'
import { socket } from './socket';
import { UserContext } from './Container';

export default function UserInput() {
  const message = React.useRef('');
  const user = useContext(UserContext);
  return (
       <div className='user-input'>
        <textarea placeholder='write a message ...' ref={message}></textarea>
        <button onClick={(e)=>{
         e.preventDefault();
         if(message.current.value.trim() === '')
         return;
         socket.emit('send-message',{message:message.current?.value,user});
         message.current.value = '';
        }}>Send</button>
      </div>
  )
}
