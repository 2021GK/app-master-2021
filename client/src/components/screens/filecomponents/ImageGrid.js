import React, {useContext } from 'react'
import {GlobalContext} from '../../../context/GlobalState';
import { TiDeleteOutline } from "react-icons/ti";
import {motion} from 'framer-motion';




const ImageGrid = (props) => {
    const {filelist, deleteFile } =useContext(GlobalContext);

    return (
        <>
        <div className="img-grid">
            {filelist.map(file => 
            <motion.div className="img-wrap" key={file.filePath}
            whileHover={{opacity: 1}}>
            <TiDeleteOutline className="file-topleft" onClick={() => deleteFile(file._id)}/>
            <motion.img src={`http://localhost:5000/${file.filePath}`} alt="uploaded picture"
            onClick={() => props.setSelectedImg(`http://localhost:5000/${file.filePath}`)}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
            />
            </motion.div>)}
            </div>
            </>
        );
    }
    
    export default ImageGrid;