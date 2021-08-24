import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../../context/GlobalState';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {Room} from "@material-ui/icons";
import {BiTrash} from 'react-icons/bi';




export const PinList = () => {
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 44,
        longitude: 20,
        zoom: 5
      });

      const [currentPlace, setCurrentPlace]=useState(null);
      const [newPlace, setNewPlace] =useState(null);
      const [title, setTitle] =useState('');
      const [desc, setDesc] =useState('');

      const currentEmail= localStorage.getItem("currentEmail");

      const {pinlist, addPin, deletePin}= useContext(GlobalContext);

      const handleClickPin = (id, lat,long) => {
        setCurrentPlace(id);
        setViewport({...viewport, latitutde:lat, longitude: long});

    }

    const addNewPin= (e) => {
        const [long, lat] =e.lngLat;
        setNewPlace({
            lat, long
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPin = {
          currentEmail: currentEmail,
          currentData: {
          _id: Math.floor(Math.random() * 1000),
          title, 
          desc,
          lat: newPlace.lat,
          long: newPlace.long
            }}
        addPin(newPin);
        setTitle('')
        setDesc('')
    };



      return (
        <>
      <ReactMapGL {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX} 
      onViewportChange ={nextViewport =>setViewport(nextViewport)} 
      mapStyle="mapbox://styles/mikenzi/cks6gq8rf01k917qu6zxxlccl" 
      onDblClick={addNewPin} 
      transitionDuration="250">

      {pinlist.map(pin=> (<><Marker
      latitude={pin.lat}
      longitude={pin.long}
      offsetLeft={-viewport.zoom *3.5}
      offsetTop={-viewport.zoom *7}
      key={pin._id}
       >
        <Room key={pin._id} style={{fontSize: viewport.zoom *7, color: "teal", cursor:"pointer"}} onClick={() => handleClickPin(pin._id, pin.lat, pin.long)}/>
      </Marker>
      {pin._id===currentPlace && (
            <Popup
            key={pin._id}
            latitude={pin.lat}
            longitude={pin.long}
            closeButton={true}
            closeOnClick={false}
            anchor="bottom"
            onClose={() => setCurrentPlace(null)}>
                        <div className="pins-card">
                        <div><label className="pins-label">{pin.title}</label>
                        <BiTrash className='todo-del' onClick={() => deletePin(pin._id)}/></div>
                        <h4 className='pins-h4'>{pin.desc}</h4>
                      </div>
              </Popup>)}</>))}
              {newPlace && (
              <Popup
            latitude={newPlace.lat}
            longitude={newPlace.long}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
            onClose={() => setNewPlace(null)}><div>
                <form className='pins-form' onSubmit={handleSubmit}>
                    <label className='pins-label'>Naslov</label>
                    <input className='pins-input' placeholder="Naslov" onChange={(e) =>setTitle(e.target.value)}/>
                    <label className='pins-label'>Opis</label>
                    <textarea placeholder="..." onChange={(e) =>setDesc(e.target.value)}/>
                    <button className="submitPin" type="submit">Dodaj novo mesto</button>
                </form>
                </div></Popup>)}
              
     
      </ReactMapGL>      
        </>
    )
    }