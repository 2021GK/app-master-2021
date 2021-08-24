import {useState, useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState';



const UploadFile = () => {

    const [file, setFile] = useState(null);
    const [error, setError]=useState(null);
    const types = ['image/png', 'image/jpeg'];
    const currentEmail= localStorage.getItem("currentEmail");

    const {addFile} =useContext(GlobalContext);



    const handleChange = async (e) => {
        let selected=e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Please select a .jpeg or .png file');
        }
    };

      const onSubmit = async (e) => {
        e.preventDefault();

      const formData = new FormData();
        formData.append('file', file);
        formData.append('currentEmail', currentEmail );
        await addFile(formData);
        setFile(null);
        document.location.reload();
  }



    return (
        <form className='file-container' onSubmit={onSubmit}>
        <label className="file-label">
          <input className="file-input" type="file" onChange={handleChange} />
          <span>+<br/></span>
        </label>
        <input type='submit' value='Otpremi sliku' className='file-upload'/>
        <div className="file-output">
          {error && <div className="file-error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
  </form>
    );
}
 
export default UploadFile;