import React from 'react';
import {FaArrowRight, FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';
import './contact-us.css';

const Contactus = () => {

    return (
        <>
            <div className='contact-us'>
                <div className="contact-us-title">
                <h1>Contact us</h1>
                <h2>Get in touch</h2>
                </div>
                <div className='contact-us-container'>

                    <div className='left-col'>
                        <h4>Our Info.</h4>
                        <div className='address-list'>
                            <div className="email"> <FaPhone /> <span>+251901135018</span></div>
                            <div className="email"><FaEnvelope /> <span>rina@hospital.com</span></div>
                            <div className="email"><FaHome /> <span>Bole, Bitweded bahiru 1st floor.</span></div>
                        </div>
                    </div>

                    <div className='right-col'>
                        <h2>Message us</h2>
                        <form className='contact-us-form'>
                            <div className='field'>

                                <div className='field name-email'>
                                    <input type="text" placeholder="Name"></input>
                  
                                    <input type="text" placeholder="Email"></input>
                                </div>

                                <div className="field subject">
                                    <input type="text" placeholder="Subject"></input>
                                </div>

                                <div className='field message'>
                                    <textarea placeholder="Write your message here..">
                                    </textarea>
                                </div>

                                <div className="form-button">
                                    <button className='btn'>Send<FaArrowRight /> </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactus;