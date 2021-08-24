import {useState} from 'react';
import {Link} from 'react-router-dom';  
import { Nav, Navbar } from 'react-bootstrap';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { withRouter } from 'react-router-dom';
import {ModalInfo} from './ModalInfo';


const Navigation = ({history, modalText, modalTitle}) => {

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentEmail");
        history.push("/login");
    }

    const [ showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(prev => !prev);
    }
    return (
        <div>
             <ModalInfo showModal={showModal} setShowModal={setShowModal} modalTitle={modalTitle} modalText={modalText}/>
            <Navbar collapseOnSelect expand="lg" bg="navColor" variant="dark">
                <Navbar.Brand as={Link} to="/"><FlightTakeoffIcon/>Glavna stranica</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link  as={Link} to="/todo">Podsetnik</Nav.Link>
                <Nav.Link as={Link} to="/trans">Kalkulator budžeta</Nav.Link>
                <Nav.Link as={Link} to="/pins">Mapa</Nav.Link>
                <Nav.Link as={Link} to="/files">Galerija</Nav.Link>
                </Nav>
                <Nav>
                <button className="todo-btn" style={{backgroundColor: 'teal'}} onClick={toggleModal}>Info</button>
                <button className="todo-btn" onClick={logoutHandler}>Odjava</button>

                </Nav>

            </Navbar>


        </div>
    )

}

export default withRouter(Navigation);
