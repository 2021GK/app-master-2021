import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';  
import axios from 'axios';
import todo from '../pics/todo.jpg';
import budget from '../pics/budget.jpg';
import map from '../pics/map.jpg';
import gal from '../pics/gal.jpg';
import Navigation from './Navigation';



const PrivateScreen=({history}) => {
    const [, setPrivateData]=useState("");
    const [error, setError]=useState("");
    const modalTitle ='Dobro došli!';
    const modalText = 'Ova aplikacija će Vam pomoći da na jednom mestu sakupite sve informacije neophodne za put. Klik na odgovarajuću sliku će Vas odvesti na ostale sekcije sajta.';


    useEffect(()=> {
        if(!localStorage.getItem("authToken")) {
            history.push("/login")
        }

        const fetchPrivateData=async () => {
            const config ={
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                } 
            }

            try {
                const data=await axios.get("/api/private", config);
                setPrivateData(data.data);
            }
            catch(error) {
                localStorage.removeItem("authToken");
                localStorage.removeItem("currentEmail");
                setError("Zabranjen pristup stranici! Prijavite se na sajt");

            }
        }

        fetchPrivateData();
    }, [history]);

    return (error? <span className="error-message">{error}</span> :
        <div className="landing-container">
            <Navigation modalText={modalText} modalTitle={modalTitle}/>
        <div className="upper-container">
        
        </div>
        <div className="landing">
    <div className="ui-card">
        <img src={todo} alt="todo"/>
        <div className="description">
        <Link to="/todo"><h3>Podsetnik</h3></Link>
        </div>
    </div>
    <div className="ui-card">
        <img src={budget} alt="budget"/>
        <div className="description">
        <Link to="/trans"><h3>Kalkulator budžeta</h3></Link>

        </div>
    </div>
    <div className="ui-card">
        <img src={map} alt="map"/>
        <div className="description">
        <Link to="/pins"><h3>Mapa</h3></Link>
        </div>
    </div>
    <div className="ui-card">
        <img src={gal} alt="gallery"/>
        <div className="description">
        <Link to="/files"><h3>Galerija</h3></Link>
        </div>
    </div>
    </div>
    </div>)
}

export default PrivateScreen;