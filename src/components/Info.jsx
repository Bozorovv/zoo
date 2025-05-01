import React from 'react'
import binoculars from '../image/binoculars.png'
import dog from '../image/dog1.png'
import trust from '../image/trust.png'
import '../style/info.css'
function Info() {
  return (
    <section className='info'>
      <div className="container">
        <h2>How it works </h2>
        <div className="info__wrapper">
           <div className="info__card">
            <div className="info__content">
            <img src={binoculars} alt="" />
            </div>
            <h6>Keep an eye on your favourite animals online</h6>
           </div>
           <div className="info__card">
            <div className="info__content">
            <img src={dog} alt="" />
            </div>
            <h6>Become a part of the communtity</h6>
           </div>
           <div className="info__card">
            <div className="info__content">
            <img src={trust} alt="" />
            </div>
            <h6>Support animals with the donations</h6>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Info
