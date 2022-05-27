import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { render } from '@testing-library/react';
import { Button } from '@mui/material';

const  TicketInfo = ( {showInfo, setShowInfo , ticketNumber} ) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => {setShowInfo(false)};
  const handleShow = () => setShow(true);

  return (
    <div>
        <Modal show={showInfo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ticketNumber}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

/* render (<TicketInfo/>); */
export default TicketInfo