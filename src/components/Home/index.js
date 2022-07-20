import "./index.scss";
import LogoS from "../../assets/logo/dyyp.png"
const Home = () => {

    return (
        <div className="container home-page">
            <img src={LogoS} alt="logo"/>
            <div className="text-zone">
                <h1>dyyptons, is an independent record label<br /> and art collective founded by<br /> musician and artist :<br /> Alihan Selçuk.</h1>
            </div>
        </div>
    )

}

export default Home;