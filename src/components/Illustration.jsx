import React from 'react'
import illustration from '../image/Illustration.pngg'
import '../style/illustration.css'


function Illustration() {
  return (
    <section className='illustration'>
        <img src={illustration} alt="" />
    </section>
  )
}

export default Illustration