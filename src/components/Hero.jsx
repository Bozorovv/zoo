import React from 'react'
import panda_hero from "../image/her3.png"
import panda_hero_media from "../image/pamda_media_hero.png"
import '../style/hero.css'



function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h1>Watch your favorite <span>animals online</span></h1>
            <p>Observe different animals from around the world online in live time. Help vulunteers to take a good care of animals, donate to your favorite ones.</p>
            <div>
              <button>Watch now </button>
              <button>Donate</button>
            </div>
          </div>
          <div className="hero_img">
            <img src={panda_hero} alt="" />
            <img src={panda_hero_media} alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero