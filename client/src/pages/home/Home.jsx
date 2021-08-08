import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Share from "../../components/share/Share";

import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="con1"><Sidebar /></div>
        <div className="con2"><Share /></div>
         
       <div className="con3"><Rightbar/></div>
      </div>
    </>
  );
}
