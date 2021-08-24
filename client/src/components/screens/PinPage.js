import React, {useContext, useEffect} from 'react'
import {PinList} from './pincomponents/PinList';
import {GlobalContext} from '../../context/GlobalState';
import Navigation from './Navigation';


function PinPage() {
    const { getPins } =useContext(GlobalContext);
    const modalText="Dupli klik na mapi otvara prozor sa formom. U njoj možeš da napišeš detalje o mestu koje želiš da obeležiš na mapi. Čuvanjem forme će se na istom mestu pojaviti čioda, a klikom na nju se otvara podsetnik koji si kreirao.";
    const modalTitle="Mapa sa mestima koje želiš da obiđeš";


    useEffect(()=> {
        getPins();
    }, []);



    return (
        <div>
            <Navigation modalText={modalText} modalTitle={modalTitle}/>
            <PinList/>
        </div>
        );
    }
    
    
    export default PinPage;