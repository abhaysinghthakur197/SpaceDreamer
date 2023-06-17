
import Welcome from "./WelcomePart/Welcome.js";
import Spaceapi from "./SpaceCard/Spaceapi.js";

const Home = () => {
    return (
        <div className="container">
            <Welcome />
            <Spaceapi />
        </div>
    )
}


export default Home;