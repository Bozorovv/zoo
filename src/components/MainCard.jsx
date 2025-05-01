import React from 'react'
import { NavLink } from 'react-router-dom'

function MainCard({img, text, matn, logo}) {
  return (
    <section className='main-card'>
      <div className="container">
        <div className="main__wrapper">
            <NavLink to={"/zoo"}>
            <div className="main__card">
                <div className="img__logoo">
                <img className='iimg' src={img} alt="" />
                </div>
                
                <div className="main__content">
                    <div className="main__text">
                        <h3>{text}</h3>
                        <h6>{matn}</h6>
                    </div>
                    <NavLink to={"/https://youtu.be/rTqg2hEjGdE?feature=shared"}>
                    <img src={logo} alt="" />
                    </NavLink>
                    
                    
                </div>
            </div>
            </NavLink>
           
            
        </div>
       
      </div>
    </section>
  )
}

export default MainCard
