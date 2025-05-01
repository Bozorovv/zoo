import React from 'react'
import PandaCard from './PandaCard'
import card1 from '../image/pandacha.png'
import card2 from '../image/buyrgut.png'
import card3 from '../image/gorila.png'
import card4 from '../image/tumsoq3.png'
import icon1 from '../image/icon3.png'
import vd from '../image/gorrilavd.png'
import vdcha from '../image/vdchalar.png'


function Gorila() {
  return (
    <div className='container'>
          <PandaCard cardtext="Pandas"  cardtext2="Eagles" cardtext3="Gorillas" cardtext4="Aligators" rasm={card1} card={card1}  nom="The Giant Pandas" matncha="Main cameras" vdtext={vd} icon1={icon1} icon2={icon1} vd="Side cameras"  vdlar={vdcha} vdlar2={vdcha} vdlar3={vdcha} card2={card2} card3={card3} card4={card4}/> 
    </div>
  )
}

export default Gorila
