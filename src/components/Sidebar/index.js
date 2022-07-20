import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import LogoS from "../../assets/logo/dyyp.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay, faEnvelope, faHome, faPeopleGroup, faRecordVinyl } from "@fortawesome/free-solid-svg-icons"
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons"


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#532d96" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="video-link" to="/music_videos">
                <FontAwesomeIcon icon={faCirclePlay} color="#532d96" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="releases-link" to="/releases">
                <FontAwesomeIcon icon={faRecordVinyl} color="#532d96" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="artist-link" to="/artists">
            <FontAwesomeIcon icon={faPeopleGroup}color="#532d96" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope}color="#532d96" />
            </NavLink>
        </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://open.spotify.com/user/11152129183"
                    >
                       <FontAwesomeIcon icon= {faSpotify}color="#532f96"/>
                    </a>
               </li>
               <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/c/dyyptons"
                    >
                       <FontAwesomeIcon icon= {faYoutube}color="#532f96"/>
                    </a>
               </li>
            </ul>
            
        
    </div>
)

export default Sidebar