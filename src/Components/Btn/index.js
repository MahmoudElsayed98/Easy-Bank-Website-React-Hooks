import React from 'react';
import './index.css';
import { Button } from 'react-bootstrap';

function Btn(props) {
  return (
    <Button className={`custom-button position-relative rounded-pill d-lg-flex pt-2 px-3 custome-btn border-0 ${props.sty}`}>Request Invite</Button>
  )
}

export default Btn