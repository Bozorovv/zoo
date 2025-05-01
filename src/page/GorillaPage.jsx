import React from 'react'
import PandaCard from '../components/PandaCard'
import card1 from '../image/pandacha.png'
import card2 from '../image/buyrgut.png'
import card3 from '../image/gorila.png'
import card4 from '../image/tumsoq3.png'
import icon1 from '../image/icon3.png'
import vd from '../image/gorillallive.png'
import qalam2 from '../image/qalam2.png'
import vdcha from '../image/livepanda.png'
function GorillaPage() {
  return (
    <div>
      <PandaCard cardtext="Pandas" cardtext2="Eagles" cardtext3="Gorillas" cardtext4="Aligators" rasm={card1} card={card1}  nom="The Giant Pandas" matncha="Main cameras" vdtext={vd} icon1={icon1} icon2={icon1} vd="Side cameras"  vdlar={vdcha} vdlar2={vdcha} vdlar3={vdcha} card2={card2} card3={card3} card4={card4} nom1="Information"  matn1="Zoo" matn2="GRACE gorillas" matn3="Type of aviary" matn4="Imitation of the natural environment" matn5="Imitation of the natural environment" matn6="Habitat" matn7="Eastern Democratic Republic of the Congo, southwestern Uganda and Rwanda" matn8="Type of food" matn9="Bamboo shoots and fruits, termites and ants." matn10="Population in the world" matn11="600" matn12="About species" matn13="The eastern gorilla has become increasingly endangered since the 1990s, and the species was listed as critically endangered in September 2016 as its population continued to decrease. " nom2="Interesting Facts" nom3="The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet." qalam={qalam2}/>
      </div>
   
  )
}

export default GorillaPage
