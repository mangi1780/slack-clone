import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { StarBorderOutlined, InfoOutlined } from '@mui/icons-material';
import './Chat.css'
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';
import { Hidden } from '@mui/material';
import ChatDetails from './ChatDetails';

function Chat() {
  const { channelId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const [clicked, setCicked] = useState(false);
  //useEffect to load the indiividual chats

  useEffect(() => {
    if (channelId) {
      debugger
      db.collection('Channels').doc(channelId).onSnapshot((snapshot) => (setRoomDetails(snapshot.data())));
      //fetching messages from db in useEffect
      db.collection('Channels').doc(channelId)
        .collection('Messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())));
      debugger
      console.log(roomDetails);
      console.log(roomMessages);
    }

  }, [channelId]);

  const displayDetails = (e)=>{
    if(clicked){
      setCicked(false);
    }
    else{
      setCicked(true)
    }
  }

  return (

    <div className='chat'>
      <div className='chat__header'>
        <div className='chat_headerLeft'>
          <h4 className='chat_channelName'>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className='chat__headerRight' >
          <button onClick={displayDetails}>
            <InfoOutlined /> Details
          </button>
        </div>
      </div>
      <div className='chatBody'>
        <div className='chat__Messages'>
          {roomMessages.map(({ message, timestamp, username, userimage }) => (<Message message={message} timestamp={timestamp} username={username} userimage={userimage} />))}
          <ChatInput channelName={roomDetails?.name} channelID={channelId} />
        </div>
       <ChatDetails id={channelId} clicked={clicked}/>
      </div>
    </div>


  )
}

export default Chat