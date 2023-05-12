import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import { HelpCenterOutlined } from "@mui/icons-material";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" 
        alt="user?.displayName"
        src="user?.photoURL"/>
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input style={{color:"white"}} placeholder="Search..."/>
      </div>
      <div className="header__right"><HelpCenterOutlined/></div>
    </div>
  );
}
