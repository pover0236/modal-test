import React from 'react'
import ModalOne from './components/ModalOne';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [showModal1, setShow] = useState({visible:false});

  const handleShow = () => {
    setShow({visible:true});
  }

  return (
    <div>
      <div>
        <Button variant='primary' onClick={()=> handleShow()}>Show Modal 1</Button>
      </div>
      <ModalOne showModal={showModal1}/>
    </div>
  )
}