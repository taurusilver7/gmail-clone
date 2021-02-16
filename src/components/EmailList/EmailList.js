import React from "react";
import "./EmailList.css";

import EmailRow from "./EmailRow/EmailRow";
import Section from "./Section/Section";

import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsIcon from "@material-ui/icons/Settings";

import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { useHistory } from "react-router-dom";

const EmailList = () => {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/mail")} className="emailList">
      <div className="emailList__settings">
        <div className="emaiList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="Hello Fellow Viewers."
          description="This is a test. pacl my bag with seven dozens of liqor jugs."
          time="10:00 AM"
        />

        <EmailRow
          title="Twitch"
          subject="Hello Fellow Viewers."
          description="This is a test.The quick brown fox jumped over the lazy dog. pack my bag with seven dozen of liquor jugs."
          time="10:00 AM"
        />
      </div>
    </div>
  );
};

export default EmailList;
