import React, { useEffect,useState } from 'react';
import db from '../firebase';
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DraftsIcon from '@mui/icons-material/Drafts';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AppsIcon from '@mui/icons-material/Apps';
import MailIcon from '@mui/icons-material/Mail';
import { useStateValue } from '../StateProvider';



export default function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    const [channels,setchannels]= useState([]);
    useEffect(()=>{
        //code to fetch channel details from firestore only once
        db.collection('Channels').onSnapshot(snapshot=>(setchannels(snapshot.docs.map(doc=>({
            id:doc.id,
name:doc.data().name
        })))
        ))             
    },[channels]);    
    
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Vibe</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={DraftsIcon} title="Mention & Reactions" />
            <SidebarOption Icon={FileCopyIcon} title="Saved Items" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={MailIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title='Exapnd less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption Icon={AddIcon} title='Add Channel' addChannelOption={true}/>

{
    //iterating over channel list from firestore
    channels.map((channel)=>(<SidebarOption title={channel.name} id={channel.id}/>))
}
        </div>
    )
}

//history to change the URL - usehistory Hook - forcing redirect
