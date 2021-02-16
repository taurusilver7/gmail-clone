import React from "react";
import "./Sidebar.css";

import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import NoteIcon from "@material-ui/icons/Note";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

import SidebarOption from "./SidebarOption/SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number="54"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number="12" />
      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number="8" />
      <SidebarOption Icon={SendIcon} title="Sent" number="26" />
      <SidebarOption Icon={NoteIcon} title="Drats" number="3" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number="" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number="" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
