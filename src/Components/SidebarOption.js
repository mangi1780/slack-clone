import React, { useEffect } from 'react'
import './SidebarOption.css'
import { useNavigate } from 'react-router-dom'
import db from '../firebase';
import { useState } from 'react';
import { Motion, spring } from 'react-motion';

export default function SidebarOption({ Icon, title, addChannelOption, id }) {
  const history = useNavigate();

  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) setShowMenu(false);

  }, [xPos, yPos]);

  const handleClick = () => {
    if (showMenu) setShowMenu(false);
  }
  const selectChannel = () => {
    if (id) {
      history(`/channel/${id}`)
    }
    else {
      history(`/`);
    }
    setShowMenu(false);
  }

  const handleContextClick = (e) => {
    e.preventDefault();
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
    setShowMenu(true);
  }

  const addChannel = () => {
    const channelName = prompt('Please Enter Channel name');
    if (channelName) {
      db.collection('Channels').add({
        name: channelName,
      })
    }

  }

  const handleRename = () => {
    db.collection("Channels").doc(id).get().then(function (doc) {
      if(doc && doc.exists){
        var data = doc.data();
        db.collection("Channels").doc("newName").set(data).then(function (){
           // deletes the old document
          db.collection("Channels").doc("name@xxx.com").delete();
        //  db.collection("Channels").doc
        }      
        )
    }
  })
}

  const handleDelete = () => {
    let temp = window.confirm("Are you sure about deleting this?");
    if (temp) {
      db.collection("Channels").doc(id).delete();
      console.log("Pushing the home page");
      history(`/`);
      console.log("Done");

    }

  }

  const handleDetail = () => {
    alert("Detail");
  }
  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel} onContextMenu={handleContextClick}>
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (<h3> {title}</h3>) : (<h3 className='sidebarOption_channel'><span className='sidebarOption_hash'>#</span> {title}</h3>)}
      <Motion
        defaultStyle={{ opacity: 0 }}
        style={{ opacity: !showMenu ? spring(0) : spring(1) }}
      >
        {(interpolatedStyle) => (
          <>
            {showMenu ? (
              <div
                className="menu-container"
                style={{
                  top: yPos,
                  left: xPos,
                  opacity: interpolatedStyle.opacity,
                }}
              >
                <div className='contextMenu'>
                  <div className='menuItem' onClick={handleRename}>Rename</div>
                  <div className='menuItem' onClick={handleDelete}>Delete</div>
                  <div className='menuItem' onClick={handleDetail}>Detail</div>
                </div>

              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </Motion>
    </div>
  )
}
