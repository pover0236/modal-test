import {React, useState} from "react";
import {Modal, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalOne({showModal}) {
    let show = showModal.visible
    const [showModal1, setShow] = useState();
    const handleClose = () => {
        setShow(false)
        show = false
        console.log(showModal1)
    }

    return(
        <div className="modal">
        <Modal show = {show} >
            <Modal.Header closeButton>
                <Modal.Title>Modal One</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>This is modal 1.</>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>Close Modal</Button>
            </Modal.Footer>
        </Modal>
    </div>    
    );
};