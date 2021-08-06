import "./user.css";
import Topbar from "../../components/topbar/Topbar";
import { Users } from "../../dummyData";
import CloseFriend from "../../components/closeFriend/CloseFriend";

export default function Sidebar() {
  return (
      <>
        <Topbar />

    <div className="sidebar">
      <div className="sidebarWrapper">
          <h1>All Users</h1>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}

        </ul>
      </div>
    </div>
    </>
  );
}
