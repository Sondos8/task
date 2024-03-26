import React from 'react'
import img from "../../assets/images/193a314d247081af73c5061e38d7c33f.png"
import social1 from "../../assets/images/social1.svg"
import social2 from "../../assets/images/social2.svg"
import social3 from "../../assets/images/social3.svg"
import social4 from "../../assets/images/social4.svg"

export default function Home() {
  return (
    <>
      <div className="cont position-relative fex">
        <div className="row">
          <div className="col-md-8 left">
            <div>
              <p className='style'>PEACHY PUP <br /> BAKERY</p>
              <h1 className='layout'>TASTY PASTRIES</h1>
              <p className='style2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
              <button className='style3 border-0'>SEE MORE</button>
            </div>
            <div className="parent d-flex">
            <div className="icons">
              <img src={social1} alt="" className='pe-4' />
              <img src={social2} alt="" className='pe-4' />
              <img src={social3} alt="" className='pe-4' />
              <img src={social4} alt="" className='pe-4' />
            </div>
            <div className='style6'>
              <p><strong>Telephone :</strong> +7 700 000 00 00</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 right">
            <div>
              <img src={img} alt="" className='w-100 style4'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
