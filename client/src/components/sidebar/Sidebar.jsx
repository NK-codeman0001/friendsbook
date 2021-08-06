import "./sidebar.css";
import {
//  HomeIcon,
//  InfoIcon,
//  GitHubIcon,
//  ContactsIcon,
//  ExploreIcon,
//  ExitToAppIcon,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h4>Quick Access</h4>
        <br />
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <HomeIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Homepage</span>
          </li>
          <li className="sidebarListItem">
            {/* <InfoIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">About Us</span>
          </li>
          <li className="sidebarListItem">
            {/* <ExploreIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            {/* <ContactsIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Contact Us</span>
          </li>
          <li className="sidebarListItem">
            {/* <GitHubIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Source Code</span>
          </li>
          <li className="sidebarListItem">
            {/* <ExitToAppIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Log Out</span>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
