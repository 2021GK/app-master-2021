import {useEffect, useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import UploadFile from './filecomponents/UploadFile';
import ImageGrid from './filecomponents/ImageGrid';
import Navigation from './Navigation';
import Modal from './filecomponents/Modal';




function FilePage() {
    const [selectedImg, setSelectedImg] = useState(null);
    const { getFiles } =useContext(GlobalContext);
    const modalText="Sken pasoša i vize, rezultati PCR testa, plan puta... Na jednom mestu sakupi sve fotografije koje će ti u nekom trenutku biti potrebe.";
    const modalTitle="Na ovoj stranici sačuvaj sve slike koje su ti potrebne za put";


    useEffect(()=> {
        getFiles();
    }, []);

    return (
        <div>
            <Navigation  modalText={modalText} modalTitle={modalTitle}/>
        
        <div className="file-container">
        <UploadFile/>
        <ImageGrid setSelectedImg={setSelectedImg}/>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
        </div>
        );
    }
    
    
    export default FilePage;