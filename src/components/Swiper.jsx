import React from 'react'
import "../style/swiper.css"
import icon2 from "../image/icons2.png"
import paws from "../image/paws.svg"
import qol from "../image/qol.svg"

function Swiper() {
  return (
    <section className='swiper'>
    <div className="container">
        <h2>How it works </h2>
        <div className="swiper__wrapper">
            <div className="swiper__card">
                <div className="swiper__content">
                    <img src={icon2} alt="" />
                </div>
                <h6>Keep an eye on your favourite animals online</h6>
            </div>
            <div className="swiper__card">
                <div className="swiper__content">
                    <img src={paws} alt="" />
                </div>
                <h6>Become a part of the communtity</h6>
            </div>
            <div className="swiper__card">
                <div className="swiper__content">
                    <img src={qol} alt="" />
                </div>
                <h6>Support animals with the donations</h6>
            </div>
        </div>
    </div>
</section>
  )
}

export default Swiper