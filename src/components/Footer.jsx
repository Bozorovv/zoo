import React from 'react'
import "../style/footer.css"
import logo1 from '../image/header2.png'


function Footer() {

   
        


    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_wrapper">

                    <div className="ul">
                        <div className="imgg">
                           <img src={logo1} alt="" />
                        </div>

                        <ul className='li'>
                            <li>Map</li>
                            <li>Zoos</li>
                            <li>Contact Us</li>
                            <li>Design</li>
                        </ul>
                    </div>
                    <div className="footer_end">
                        <h3>Design by Lemeshko Kateryna</h3>
                        <h4>©RSSchool and ©Yem Digital 2021</h4>
                    </div>

                </div>
            </div>
        </footer>
    )

}
export default Footer