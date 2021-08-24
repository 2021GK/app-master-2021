import React from 'react';
import {motion} from 'framer-motion';



const Modal = (props) => {

    const handleClick = (e) => {
        if (e.target.classList.contains("modal-frame")) {
        props.setSelectedImg(null);}
    }


    const handleClose = (e) => {
        props.setSelectedImg(null);}


    
    return (

        <motion.div className="modal-frame" onClick={handleClick} 
        initial={{opacity:0}} animate={{opacity:1}}>
            <span onClick={handleClose}>KLIKNI BILO GDE DA ZATVORIŠ SLIKU</span>
            <img src={props.selectedImg} alt="modal"/>

        </motion.div>
    )
}

export default Modal;