import axios from 'axios'
import React, { useState } from 'react'
import img from '../../assets/images/mail.svg'
import img2 from '../../assets/images/call.svg'

export default function Contact() {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleInput = (event) => {
        setContact({...contact, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        axios.post('http://upskilling-egypt.com:3001/contact', {contact}).
        then(response => console.log(response))
        .catch(err=> console.log(err))
    }

  return (  
    <>
    <div className="contact mb-5 fex">
        <div className="harder">CONTACT US</div>
        <div className="row container-cont mt-5">
            <div className="col-md-6">
                <div className="data">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleInput} placeholder='Full Name' type="text" name='name' className='border-0 p-3 bg mb-3' />

                        <input onChange={handleInput} placeholder='Email' type="email" name='email' className='border-0 p-3 bg mb-3' />

                        <input onChange={handleInput} placeholder='Phone' type="phone" name='phone' className='border-0 p-3 bg mb-3' />

                        <div className='text-center'><button className='bg-2 p-3 mb-5 mt-2'>SEND</button> </div>
                    </form>
                </div>
            </div>
            
            <div className="col-md-6">
                <div className="text-center mt-5">
                    <div><img src={ img}  alt="" className='me-2' /><span>upskilling.eg1@gmail.com</span></div>
                    <div className='mt-5 me-5'><img src={img2} alt="" className='me-5' /><span>+201154932137</span></div>
                </div>
            </div>
        </div>
    </div>

    <div className='footer'></div>
    </>
  )
}
