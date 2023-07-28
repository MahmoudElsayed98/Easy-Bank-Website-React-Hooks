import React from 'react';
import './index.css';
import Btn from '../Btn';
import background from '../../images/bg-intro-desktop.svg';
import phones from '../../images/image-mockups.png';

function LandingPage() {
  return (
    <div className="landing-page position-relative overflow-hidden">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col d-flex flex-column justify-content-center">
              <h1 className='text-start display-5 mb-4'>Next generation <br /> digital banking</h1>
              <p className='text-start fs-6 mb-4'>Take your financial life online. Your Easybank account <br />
              will be a one-stop-shop for spending, saving, <br />
                budgeting, investing, and much more.</p>
              <Btn />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <img src={background} alt="lower background" className='position-absolute start-50' />
              {/* <img src={phones} alt="" className='img-fluid'/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage