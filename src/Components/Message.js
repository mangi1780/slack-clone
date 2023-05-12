import React from 'react'
import './Message.css'

function Message({message,timestamp,username,userimage}) {
   
  return (
    <div className='message'>    
         { <img src={userimage} alt=""/> }
        <div className='messageInfo'>
            <h4>
                {username} <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span> 
            </h4>
            <p>{message}</p>
        </div> 
    </div>
  )
}

export default Message