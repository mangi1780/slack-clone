import React, { useEffect, useState } from 'react'
import db from '../firebase';

function ChatDetails({id,clicked}) {
const [roomDetails, setRoomDetails] = useState(null);

useEffect(()=>{
db.collection("Chennels").doc(id).onSnapshot((snapshot) => (setRoomDetails(snapshot.data())));
},roomDetails);
  return (
<div className='chatDetails' style={{ visibility: clicked ? "visible" : "hidden" }}>
<h4>#{roomDetails?.name} Details</h4>
<br></br>
<h5>Created By : test account</h5>
<h5>Created On :  26JAN2023 </h5>
<h5>OWNER : test account</h5>
<h5>Message Count : 102</h5>
</div>
  )
}

export default ChatDetails