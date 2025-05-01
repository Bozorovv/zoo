import React, { useRef } from 'react'
import '../style/myacc.css'
import google from "../image/google.png"
import facebook from "../image/facebook.png"

import { NavLink } from 'react-router-dom'

function MyAcc() {

    let login_modal = useRef()

    function openModal() {
        login_modal.current.classList.add("open_show")
    }

    function closeModal() {
        login_modal.current.classList.remove("open_show")
    }

    return (
        <section className='myacc'>
            <div className="container">
                <div className="myacc_wrapper">
                    <div ref={login_modal} className="myacc_modal">
                        <div className="myacc_modal_wrapper">
                            <div className="login_card">
                                <div className="myacc_content">
                                    <div>
                                        <h2 onClick={closeModal}><NavLink>Create acccount</NavLink></h2>
                                        <h3><NavLink >Login</NavLink></h3>

                                    </div>
                                    <div>
                                        <NavLink to="https://myaccount.google.com/?pli=1"><button><img src={google} alt="" />Google Sign in</button></NavLink>
                                        <NavLink to="https://www.facebook.com/?locale=ru_RU"> <button><img src={facebook} alt="" />Facebook Sign in</button></NavLink>
                                    </div>
                                </div>
                                <form className='form'>

                                    <div>
                                        <label className='laabel' >Email</label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label >Password</label>
                                        <input className='laabel' type="text" />
                                    </div>

                                </form>
                                <div className="ends">
                                    <button onClick={closeModal}>SEND </button>
                                    <div>
                                        
                                        <h2 onClick={closeModal}>  Back </h2> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="myacc_card">
                        <div className="myacc_content">
                            <div>
                                <h2><NavLink>Create acccount</NavLink></h2>
                                <h3 onClick={openModal}><NavLink >Login</NavLink></h3>

                            </div>
                            <div>
                                <NavLink to="https://myaccount.google.com/?pli=1"><button><img src={google} alt="" />Google Sign in</button></NavLink>
                                <NavLink to="https://www.facebook.com/?locale=ru_RU"> <button><img src={facebook} alt="" />Facebook Sign in</button></NavLink>
                            </div>
                        </div>
                        <form className='form'>
                            <div>
                                <label className='laabel' >Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label className='laabel' >Email</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label className='laabel' >Password</label>
                                <input type="text" />
                            </div>

                        </form>
                        <div className="ends">
                            <div>
                                <input type="checkbox" />
                                <h3>Agree with the <span>User Agreement</span> and <span>Privacy Policy</span> </h3>
                            </div>
                            <button>SEND </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAcc