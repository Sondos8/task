import React from 'react'
import work1 from "../../assets/images/work2.png"
import work2 from "../../assets/images/work3.png"
import work3 from "../../assets/images/work4.png"
import work4 from "../../assets/images/work1.png"

export default function Work() {
  return (
    <>
    <div className="work fex">
      <div className="row"> 
          <div className="col-md-4 right">
            <div className="paragraph">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>
            <div className="food">
              <img src={work1} alt="" className='w-50 me-4' />
              <img src={work2} alt="" className='w-50 me-4' />
              <img src={work3} alt="" className='w-50 me-4' />
              <img src={work4} alt="" className='w-50' />
            </div>
            <div><button className='border-0 button'>CONTACTUS</button></div>
          </div>
          <div className="col-md-8 left">
            <div className="title">
              <p>HOW WE</p>
              <p>WORK</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
