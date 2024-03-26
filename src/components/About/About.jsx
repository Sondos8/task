import React from 'react'
import about from "../../assets/images/about.png"

export default function About() {
  return (
    <>
    <div className="about fex">
      <div className="row">
        <div className="col-md-8 left">
          <div className="about-title">
            <p>ABOUT US</p>
          </div>
          <div className="paragraph2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div><button className='border-0 button2 mt-3'>CONTACTUS</button></div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-about">
            <img src={about} alt="" className='w-100' />
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}
