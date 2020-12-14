import React from 'react';
import './services.css';

function Services() {
    let Gyn_icon ='images/icons/s1.png';


    return (
        <>
            <div className='service-section'>

                {/* <div className='top-divne'>Our Services</div> */}
                <h1 className='service-heading'>
                    Our Services
                </h1>
                <div className="service-heading-discription"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p></div>
                <div className="service-list">

                    <div className='service-item'>
                        <div className="service-item-icon">
                            <img src={Gyn_icon} />
                        </div>
                        <h2 className="service-item-title"> Gyn Care </h2>
                        <div className="service-discription">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                        </div>
                    </div>

                    <div className='service-item'>
                    <div className="service-item-icon">
                            <img src={Gyn_icon} />
                        </div>                
                                <h2 className="service-item-title">Medical checkup</h2>
                        <div className="service-discription">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                        </div>
                    </div>

                    <div className='service-item'>
                    <div className="service-item-icon">
                            <img src={Gyn_icon} />
                        </div>                        
                        <h2 className="service-item-title">
                            Nursing Services
                        </h2>
                        <div className="service-discription">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                        </div>
                    </div>

                    <div className='service-item'>
                    <div className="service-item-icon">
                            <img src={Gyn_icon} />
                        </div>                         <h2 className="service-item-title">Neurology</h2>
                        <div className="service-discription">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                        </div>
                    </div>

                    <div className='service-item'>
                    <div className="service-item-icon">
                            <img src={Gyn_icon} />
                        </div>                         <h2 className="service-item-title">Sleep Center</h2>
                        <div className="service-discription">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                        </div>
                    </div>

                    <div className='service-item'>
                    <div className="service-item-icon">
                            <img src={Gyn_icon} />
                        </div>                        
                        <h2 className="service-item-title">Pharmacy</h2>
                        <div className="service-discription">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </>
    )
}

export default Services;