
import { useState,useEffect } from "react";
import axios from "axios";
import '../../../../index.css'
import SpaceCard from "./SpaceCard";
import Logo from '../../../Images/Logo.png'

const Spaceapi = () => {

    const [news, setNews] = useState([]);

  

    useEffect(() => {
    
    async function getNews() {
            try {
                setTimeout(function () {
                    
                 }, 20000);
                const res = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
                setNews(res.data);
            } catch (err) {
                console.log("Error fetching data");
            }
        }
        getNews()}, []);

    return (
        <div className="Space-container">
                {news.length === 0 ? (<img className="Loading_img" src={Logo} alt="Loading"/>):(<SpaceCard  news={news}/>)}         
         </div>
    )
}


export default Spaceapi;