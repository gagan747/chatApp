import React from 'react'

export default function ChatBox({type,message,user}) {
  return (
    <div className={type==='sender'?'sender':'receiver'}>
        <span><span style={{ borderRadius: '40px', width: '50px',minWidth:'50px',minHeight:'50px', height: '50px', overflow: 'hidden' }}><img src='https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' height='100%' width='100%' alt='' /></span>
          <span>{user.split(' ')[0]}<br/>{user.split(' ')[1] || ""}</span>
        </span> <div>{message}</div>
      </div> 
  )
}
