import React from 'react';
import './main-section.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {FaCheckCircle, FaClinicMedical } from 'react-icons/fa';
import { MdCheckBox, MdCheckCircle } from 'react-icons/md';

const MainSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart, lists
}) => {

 
// console.log(list[0]);

  return (
    // <div className="main-section">
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section lightBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <div className="speciality-container">
                {lists ? (
                 
                 lists.map(list => (
                    <div  key={list} className="speciality-item">
                      <div><MdCheckCircle />{list} </div>
                      </div>
                    
                ))
                )
                 : (null)}
                 </div>
                <a to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonStyle='btn--outline'>
                    {buttonLabel}
                  </Button>
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
    // </div>
  )
}

export default MainSection;