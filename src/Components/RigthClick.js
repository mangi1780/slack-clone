import React from 'react'
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { Motion, spring } from 'react-motion';

//creating cutom hooks
const useContextMenu = () => {
    const [xPos, setXPos] = useState("0px");
    const [yPos, setYPos] = useState("0px");
    const [showMenu, setShowMenu] = useState(false);
  
    const handleContextMenu = useCallback(
      (e) => {
        e.preventDefault();
  
        setXPos(`${e.pageX}px`);
        setYPos(`${e.pageY}px`);
        setShowMenu(true);
      },
      [setXPos, setYPos]
    );
  
    const handleClick = useCallback(() => {
      showMenu && setShowMenu(false);
    }, [showMenu]);
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
      document.addEventListener("contextmenu", handleContextMenu);
      return () => {
        document.addEventListener("click", handleClick);
        document.removeEventListener("contextmenu", handleContextMenu);
      };
    });
  
    return { xPos, yPos, showMenu };
  };

function RigthClick() {
    const {xPos, yPos, showMenu} = useContextMenu();

  return (
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
             <div>Menu1</div>
             <div>Menu2</div>
             <div>Menu3</div>
             <div>Menu4</div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </Motion>
  )
}

export default RigthClick