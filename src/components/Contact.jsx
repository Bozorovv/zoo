import React from 'react'
import '../style/contact.css'
function ContactPage() {
    return (
        <div className='contact'>
            <div className="container">
                <div className="contact__wrapper">
                    <h2 className='h2'>Contact us</h2>
                    <div className="contact_form">
                        <form className='form' >
                            <label htmlFor="Name">Name</label>
                            <input className='input1' type="text" />
                            <label htmlFor="Email">Email</label>
                            <input className='input2' type="text" />
                            <label htmlFor="Your Message">Your Message</label>
                            <input className='input3' type="text" />
                            <button className='btn1'>send</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage
