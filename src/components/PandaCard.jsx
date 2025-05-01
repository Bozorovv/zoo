import React from 'react'
import '../style/panda.css'
import { NavLink } from 'react-router-dom'

function PandaCard({cardtext ,  cardtext2, cardtext3, cardtext4, card, nom, matncha, icon1, icon2, vd, vdlar, vdlar2, vdlar3, vdtext, card2, card3, card4, nom1, matn1, matn2, matn3, matn4 , matn5 , matn6,matn7 , matn8, matn9, matn10 , matn11, matn12, matn13 , nom2, nom3 ,qalam}) {
  return (
    <div className="container">
         <div className='card_wrapper'>
      <div className="rasm">
       
        <div className="cardchalar"> 
          <NavLink to='/zoo'><img src={card} alt="" />
          <h5>{cardtext}</h5>   </NavLink>       
            
        </div>

     <div className="cardchalar">
      <NavLink to='/eagle'>
      <img src={card2} alt="" />
      <h5>{cardtext2}</h5>
      </NavLink>
       
        </div>
     <div className="cardchalar">
      <NavLink to='/gorilla'> <img src={card3} alt="" />
      <h5>{cardtext3}</h5> </NavLink>
       
        </div>
     <div className="cardchalar">
     <NavLink to='/aligator'><img src={card4} alt="" />
     <h5>{cardtext4}</h5></NavLink>
        
        </div>
   
        
      </div>
      <div className="video">
        <div className="video_hero">
          <div className="hero1">
            <h4>{nom}</h4>
            <p>{matncha}</p>
          </div>
          <div className="icon">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className="video_card">
          <img className="xa" src={vdtext} alt="" />
          <div className="card">
            <h6>{vd}</h6>
            <div className="card2">
              <img src={vdlar} alt="" />
              <img src={vdlar2} alt="" />
              <img src={vdlar3} alt="" />
            </div>
          </div>
        </div>
          <div className="text">
            <div className="nom">
              <h2>{nom1}</h2>
              <div className="matn1">
                <h5>{matn1}</h5>
                <p>{matn2}</p>
              </div>
              <div className="matn1">
                <h5>{matn3}</h5>
                <p>{matn4}</p>
              </div>
              <div className="matn1">
                <h5>{matn5}</h5>
                <p>{matn6}</p>
              </div>
              <div className="matn1">
                <h5>{matn7}</h5>
                <p>{matn8}</p>
              </div>
              <div className="matn1">
                <h5>{matn9}</h5>
                <p>{matn10}</p>
              </div>
              <div className="matn1">
                <h5>{matn11}</h5>
                <p>{matn12}</p>
                <h6>{matn13}</h6>
              </div>

            </div>
            <div className="matn">
              <h2>{nom2}</h2>
              <div className="yigl">
                <div className="matnlar">
                <img src={qalam} alt="" />
                <p>{nom3}</p>
              </div>
              <div className="matnlar">
                <img src={qalam} alt="" />
                <p>{nom3}</p>
              </div>
              <div className="matnlar">
                <img src={qalam} alt="" />
                <p>{nom3}</p>
              </div>
              <div className="matnlar">
                <img src={qalam} alt="" />
                <p>{nom3}</p>
              </div>
              <div className="matnlar">
                <img src={qalam} alt="" />
                <p>{nom3}</p>
              </div>
              <div className="matnlar">
                <img src={qalam} alt="" />
                <p>{nom3}</p>
              </div>
              </div>
              
            </div>
          </div>
      </div>
      
      
    </div>
    </div>
    
  )
}

export default PandaCard
