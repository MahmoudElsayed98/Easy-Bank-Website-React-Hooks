import React from 'react';
import './index.css';
import currencyImg from '../../images/image-currency.jpg';
import restaurantImg from '../../images/image-restaurant.jpg';
import planeImg from '../../images/image-plane.jpg';
import confettiImg from '../../images/image-confetti.jpg';

function Articles() {
    return (
        <div className='articles py-5 text-md-start'>
            <div className='container py-3'>
                <h1 className='mb-5'>Latest Articles</h1>
                <div className='row'>
                    <div className='col-md-6 col-lg-4 col-xl-3 mb-4 mb-xl-0'>
                        <img src={currencyImg} alt='' className='img-fluid rounded-top' />
                        <div className='text rounded-bottom p-3'>
                            <span className='d-block mb-2'>By Claire Robinson</span>
                            <h5>Receive money in any currency with no fees</h5>
                            <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={restaurantImg} alt='' className='img-fluid rounded-top' />
                        <div className='text rounded-bottom p-3'>
                            <span className='d-block mb-2'>By Wilson Hutton</span>
                            <h5>Treat yourself without worrying about money</h5>
                            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={planeImg} alt='' className='img-fluid rounded-top' />
                        <div className='text rounded-bottom p-3'>
                            <span className='d-block mb-2'>By Wilson Hutton</span>
                            <h5>Take your Easybank card wherever you go</h5>
                            <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-3'>
                        <img src={confettiImg} alt='' className='img-fluid rounded-top' />
                        <div className='text rounded-bottom p-3'>
                            <span className='d-block mb-2'>By Claire Robinson</span>
                            <h5>Our invite-only Beta accounts are now live!</h5>
                            <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles