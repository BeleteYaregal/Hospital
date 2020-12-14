import React from 'react';
import { MdEmail, MdMap, MdPhone } from 'react-icons/md';
import './contact.css'

const Contact = () => {
    return (
        <>
        <div className="contact">
        <div className="content">
                <h1>Contact us</h1>
                <p>
                    Product knowledge is a skill where your employees fully understand and can effectively communicate with customers about your   			product, its features, benefits, uses, and support needs.
		</p>
            </div>

            <div className="contact-container">
            <div className="contact-info">
            {/* info */}
            

			<div className="box">
				<div className="icon"><MdMap /></div>
				 <div className="text">
				 <h3>Address</h3>
				 <p>Product knowledge, 
				    is a skill, 
				    where your</p>			
				</div>
			</div>
            
            <div className="box">
				<div className="icon"><MdPhone /></div>
				<div className="text">
				<h3>Phone</h3>
				<p>+251-901-1350-18</p>			
				</div>
			</div>

			<div className="box">
				<div className="icon"><MdEmail /></div>
				<div className="text">
				<h3>Email</h3>
				<p>belete272009@gmail.com</p>			
				</div>
			</div>


            {/* info end */}

            </div>

            <div className="contact-form">
			<form>

            <h2>Send a Message</h2>		
			 			 
			<div className="input-box">
			  <input type="text" name="" required="required" />
			  <span>Full Name</span>
			</div>
			
			<div className="input-box">
			  <input type="email" name="" required="required" />
			  <span>Email</span>
			</div>
			
			<div className="input-box">
			  <input type="text" name="" required="required" />
			  <span>Subject</span>
			</div>

			<div className="input-box">
			  <textarea name="" required="required"></textarea>
			  <span>Type your message...</span>
			</div>

			<div className="input-box">
			  <input type="submit" value="Send" />
			</div>



             </form>
             </div>   


            </div>
        </div>
        </>
    );
}

export default Contact;