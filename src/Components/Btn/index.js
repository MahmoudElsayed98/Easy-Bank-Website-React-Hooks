import React from 'react';
import { Button } from 'react-bootstrap';

function Btn(props) {
  return (
    <Button className={`rounded-pill d-lg-flex pt-2 px-3 custome-btn border-0 align-self-lg-start ${props.sty}`}>Request Invite</Button>
  )
}

export default Btn