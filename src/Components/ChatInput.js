import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import db from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './chatInput.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Hidden } from '@mui/material';

function ChatInput({ channelName, channelID }) {
    const [input, setInput] = useState("");
    const [file, setFile] = useState();

    // useEffect(()=>{
    //     document.getElementById('image_alt').addEventListener('click',function(){
    //         document.getElementById('image').click();
    //     });
    // },[]);

    const [{ user }, dispatch] = useStateValue();
    const sendMessage = e => {
        debugger
        var temp1 = firebase.firestore.Timestamp.now();
        var temp2 = user?.displayName;
        e.preventDefault()
        if(channelID){
            db.collection('Channels').doc(channelID).collection('Messages').add({
                message : input,
                timestamp : firebase.firestore.Timestamp.now(),
                userimage : user?.photoURL,
                username : user?.displayName,
            })
            setInput("");
        }

    }
const handleChange = (e) =>{
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    
}
const handleFileUpload = () =>{
    debugger
console.log(`Uploading the file ${file}`);
}
    return (
        <div className='chatInput'>
            <form>
                <input className='inputMessage'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
 

                <button onClick={sendMessage}>SEND</button>
            </form>

             {/* <div className='chatImage'>
                <form onSubmit={handleFileUpload}>
                <input value={""} id='image' type="file" onChange={handleChange} style={{display:'none'}}/>
                <button id='image_alt' onClick={(e)=>{e.preventDefault(); document.getElementById('image').click();console.log("File Uploaded")}} ><FileUploadIcon/></button>
                </form>
            </div>  */}
           
    
        </div>
    )
}

export default ChatInput