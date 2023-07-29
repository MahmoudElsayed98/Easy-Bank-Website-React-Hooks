import React from 'react';
import './index.css';
import Btn from '../Btn';
import background from '../../images/bg-intro-desktop.svg';
import phones from '../../images/image-mockups.png';

function LandingPage() {
  return (
    <div className="landing-page position-relative">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col d-flex flex-column justify-content-center">
              <h1 className='text-lg-start display-5 mb-4'>Next generation <br /> digital banking</h1>
              <p className='text-lg-start fs-6 mb-4'>Take your financial life online. Your Easybank account <br />
              will be a one-stop-shop for spending, saving, <br />
                budgeting, investing, and much more.</p>
              <Btn sty="align-self-center d-flex"/>
            </div>
            <div className="col d-none d-lg-flex flex-column justify-content-center align-items-center">
              <img src={background} alt="lower background" className='lower-background position-absolute' />
              <img src={phones} alt="" className='upper-background position-absolute'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage