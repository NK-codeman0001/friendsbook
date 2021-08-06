import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./about.css"

export default function About() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
     <>
            <Topbar />
            <div className="aboutContainer">
                <div className="about-side" >
                    <Sidebar />
                </div>
                <div className="about-section">
                    <h1>About </h1>
                    <br />
                    <p>Friendsbook is a Social Media Webapp built on MERN</p>
                    <br />
                    <hr />
                    <br />
                    <p>This project made by <br /> <b>Avinash(19001003025) & Neeraj(19001003025)</b><br />of
                    <a className="a-link" href="https://www.jcboseust.ac.in/">  J.C. Bose University of Science & Technology, YMCA , Faridabad </a><br />
                    under the guidance of 
                    <b> Mrs. Aayushi Bansal</b> mam <br />
                    for submission in 4th Semester Project Class.</p>
                </div>

               
                <div className="about-section">
                <h2 >Our Team</h2>
                <br />
                <br />
                <div className="row">
                    <div className="column">
                            <div className="card">
                            <img src = {PF + "person/avinash.jpeg"}  alt="Jane" className="imgdev" />
                                <div className="container">
                                    <h2>Avinash</h2>
                                    <p className="title">Web Developer</p>
                                    <p>19001003025</p>
                                    <br />
                                    <p><button className="button">Contact</button></p>
                                    <br />
                                </div>
                         </div>
                    </div>

                        <div className="column">
                            <div className="card">
                                <img src={PF + "person/neeraj.jpg"} alt="Mike" className="imgdev"/>
                                    <div className="container">
                                        <h2>Neeraj</h2>
                                        <p className="title">Web Developer</p>
                                        <p>19001003073</p>
                                        <br />
                                        <p><button className="button">Contact</button></p>
                                        <br />
                                    </div>
                             </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <img src={PF+"person/noAvatar.png"} alt="John"  className="imgdev" />
                                        <div className="container">
                                            <h2>Mrs Aayushi Bansal</h2>
                                            <p className="title">Project Coordinator</p>
                                            <br />
                                            <p><button className="button">Contact</button></p>
                                            <br />
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                     </div>
    </>
                    );
}
