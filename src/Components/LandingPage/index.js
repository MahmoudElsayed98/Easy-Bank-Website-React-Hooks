import React from 'react';
import './index.css';
import Btn from '../Btn';
import lowerBackgroundDesktop from '../../images/bg-intro-desktop.svg';
import lowerBackgroundMobile from '../../images/bg-intro-mobile.svg';
import upperBackgroundDesktop from '../../images/image-mockups.png';

function LandingPage() {
  return (
    <div className="landing-page position-relative">
      <img src={lowerBackgroundMobile} alt="lower background" className='lower-background-mobile position-absolute end-0 w-100' />
      <img src={upperBackgroundDesktop} alt="upper background" className='upper-background-mobile d-md-none position-absolute end-50 start-50' />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col d-flex flex-column justify-content-center pt-md-0 first-column">
            <h1 className='text-lg-start display-5 mb-4'>Next generation <br /> digital banking</h1>
            <p className='text-lg-start fs-6 mb-4'>Take your financial life online. Your Easybank account <br />
              will be a one-stop-shop for spending, saving, <br />
              budgeting, investing, and much more.</p>
            <Btn sty="align-self-center align-self-lg-start d-flex" />
          </div>
          <div className="col d-none d-lg-flex flex-column justify-content-center align-items-center">
            <img src={lowerBackgroundDesktop} alt="lower background" className='lower-background position-absolute' />
            <img src={upperBackgroundDesktop} alt="upper background" className='upper-background position-absolute' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage