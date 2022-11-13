import React from 'react';
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

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Code Nerd</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Mangilal
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={DraftsIcon} title="Drafts" />
            <SidebarOption Icon={FileCopyIcon} title="File Copy" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={MailIcon} title="Inbox" />
            <SidebarOption Icon={ExpandLessIcon} title='Exapnd less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption Icon={AddIcon} title='Add Channel' />
        </div>
    )
}
