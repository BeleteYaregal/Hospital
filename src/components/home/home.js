import React from 'react';
import Navbar from '../navbar/navbar';
import MainSection from './main-section';
import Footer from '../footer/Footer'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Services from '../services/services';
// import Contactus from '../contact-us/contact-us';
import Contact from '../contact-us_new/contact-us';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
    return(
        <>
        <Navbar />
        <MainSection {...homeObjOne}/>
        <MainSection {...homeObjThree}/>
        <Services {...homeObjFour} />
        <Contact />
        <Footer />
    
        </>
    );
}
export default Home;