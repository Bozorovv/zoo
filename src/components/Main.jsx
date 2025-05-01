import React from 'react'
import MainCard from './MainCard'
import paanda from '../image/paandaa.png'
import mainlogo from '../image/mainlogo.png'
import bbtn from '../image/bbtn.png'
import bbttn from '../image/bbttnn.png'
import '../style/main.css'
function Main() {
  return (
    <section className='main'>
      <div className="container">
        <div className="mainlogo">
            <h2>Pets in zoo </h2>
            <button className='button'>❤  Choose your Favorite</button>
        </div>
        <div className="main__wrapper">
            <MainCard img={paanda} text={"Pandas"} matn={"Shenshuping Gengda Panda Center"} logo={mainlogo} />
            <MainCard img={paanda} text={"Pandas"} matn={"Shenshuping Gengda Panda Center"} logo={mainlogo} />
            <MainCard img={paanda} text={"Pandas"} matn={"Shenshuping Gengda Panda Center"} logo={mainlogo} />
            <MainCard img={paanda} text={"Pandas"} matn={"Shenshuping Gengda Panda Center"} logo={mainlogo} />
            <MainCard img={paanda} text={"Pandas"} matn={"Shenshuping Gengda Panda Center"} logo={mainlogo} />
            <MainCard img={paanda} text={"Pandas"} matn={"Shenshuping Gengda Panda Center"} logo={mainlogo} />
            
        </div>
        <div className="main__logoo">
        <img src={bbtn} alt="" />
        <img src={bbttn} alt="" />
        </div>
       
      </div>
    </section>
  )
}

export default Main
