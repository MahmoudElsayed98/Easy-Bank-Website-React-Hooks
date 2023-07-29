import React from 'react';
import './index.css';
import budgetingIcon from '../../images/icon-budgeting.svg';
import apiIcon from '../../images/icon-api.svg';
import onboardingIcon from '../../images/icon-onboarding.svg';
import onlineIcon from '../../images/icon-online.svg';

function AboutUs() {
    return (
        <div className='about-us py-5'>
            <div className='container py-3'>
                <div className='up mb-5'>
                    <h1 className='text-lg-start mb-4'>Why Choose Easybank?</h1>
                    <p className='text-lg-start paragraph'>We leverage Open Banking to turn your bank account into your financial hub.<br />
                        Control your finances like never before.</p>
                </div>
                <div className='down row text-md-start'>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={onlineIcon} alt="" className='mb-4' />
                        <h3 className='mb-3'>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={budgetingIcon} alt="" className='mb-4' />
                        <h3 className='mb-3'>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={onboardingIcon} alt="" className='mb-4' />
                        <h3 className='mb-3'>Fast Onboarding</h3>
                        <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={apiIcon} alt="" className='mb-4' />
                        <h3 className='mb-3'>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs