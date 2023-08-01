import React from 'react';
import './index.css';
import Btn from '../Btn';
import logo from '../../images/logo - Copy.svg';
import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

function Footer() {
    return (
        <div className='footer py-5 text-start'>
            <div className='container'>
                <div className='row flex-column flex-md-row text-center text-md-start'>
                    <div className='col-md-3 d-flex flex-column justify-content-between'>
                        <img src={logo} alt='' className='d-block mx-auto mb-4 mb-md-0' />
                        <div className='social d-flex justify-content-center ms-4 mb-4 mb-md-0'>
                            <a href='https://www.facebook.com' className='me-3 fs-4'>
                                <img src={facebook} alt='' />
                            </a>
                            <a href='https://www.youtube.com' className='me-3 fs-4'>
                                <img src={youtube} alt='' />
                            </a>
                            <a href='https://www.twitter.com' className='me-3 fs-4'>
                                <img src={twitter} alt='' />
                            </a>
                            <a href='https://www.pinterest.com' className='me-3 fs-4'>
                                <img src={pinterest} alt='' />
                            </a>
                            <a href='https://www.instagram.com' className='me-3 fs-4'>
                                <img src={instagram} alt='' />
                            </a>
                        </div>
                    </div>
                    <div className='offset-md-1 col-md-2 mb-3 mb-md-0'>
                        <a href='#about' className='text-decoration-none'>
                            <p className='link'>About Us</p>
                        </a>
                        <a href='#contact' className='text-decoration-none'>
                            <p className='link'>Contact</p>
                        </a>
                        <a href='#blog' className='text-decoration-none'>
                            <p className='mb-0 link'>Blog</p>
                        </a>
                    </div>
                    <div className='col-md-2 mb-4 mb-md-0'>
                        <a href='#careers' className='text-decoration-none'>
                            <p className='link'>Careers</p>
                        </a>
                        <a href='#support' className='text-decoration-none'>
                            <p className='link'>Support</p>
                        </a>
                        <a href='#privacy-policy' className='text-decoration-none'>
                            <p className='mb-0 link'>Privacy Policy</p>
                        </a>
                    </div>
                    <div className='col-md-4 col-lg-3 d-flex flex-column justify-content-around'>
                        <Btn sty="d-block mx-auto ms-md-auto me-md-0" />
                        <p className='text-md-end copy-right'>&copy; Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer