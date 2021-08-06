import "./sidebar.css";

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
            <span className="sidebarListItemText"><a href="/">Homepage</a></span>
          </li>
          <li className="sidebarListItem">
            {/* <InfoIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText"><a href="/about">About Us</a></span>
          </li>
          <li className="sidebarListItem">
            {/* <ExploreIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText"><a href="/explore"> Explore </a></span>
          </li>
          
          <li className="sidebarListItem">
            {/* <GitHubIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText"><a href="https://github.com/NK-codeman0001/friendsbook">Source Code</a></span>
          </li>
          <li className="sidebarListItem">
            {/* <ExitToAppIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText"><a href="/logout">Log Out</a></span>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
