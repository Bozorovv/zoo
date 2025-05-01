import React from 'react'
import ilustrator from '../image/er.png'

import '../style/eror.css'
function Error() {
  return (
    <div className='erro'>
      <div className="container">
        <div className="erro__wrapper">
            <h1>404</h1>
            <h2>Oops, the page you are looking for doesn’t exist.</h2>
            <button>Back Home</button>
        </div>
      </div>
      <div className="erorimg">
      <img  src={ilustrator} alt="" />
      </div>
      
    </div>
  )
}

export default Error
