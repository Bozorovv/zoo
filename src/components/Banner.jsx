import React from 'react'
import donate from '../image/donate.png'
import strelka from '../image/strelka.png'
import strelka2 from '../image/strelka2.png'
import raasm from '../image/raasm.png'
import '../style/banner.css'
function Banner() {
  return (
    <section className='banner'>  
           <div className="rasmm">
           <img className='raasm' src={raasm} alt="" /> 
            </div>  
             
      <div className="container">
        <div className="banner_logo">
            <h2>Pay and feed</h2>
            <button>Donate to volunteers</button>
        </div>
        
        <div className="b__wrapper">
        <div className="b__card">
            <div className="b__content">
                <img src={donate} alt="" />
            </div>
            <h6>You donate to your favourite animals </h6>
            <div className="strellka">
            <img className='strelka' src={strelka} alt="" />
            <img className='strelka1' src={strelka2} alt="" />
            </div>
            
            
        </div>
      
        <div className="b__card">
            <div className="b__content">
                <img src={donate} alt="" />
            </div>
            <h6>You donate to your favourite animals </h6>
            <div className="strellka">
            <img className='strelka' src={strelka} alt="" />
            <img className='strelka1' src={strelka2} alt="" />
            </div>
        </div>
        <div className="b__card">
            <div className="b__content">
                <img src={donate} alt="" />
            </div>
            <h6>You donate to your favourite animals </h6>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
