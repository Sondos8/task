import React from 'react'

export default function Recipe({ item }) {
  return (
    <> 
    <div className="col-md-4 d-flex my-3">
      <div className='parent-2'>
        <div className="img">
          <img src={item?.strMealThumb} alt="" className='w-100' />
        </div>
        <div className="description p-3">
          <p className='font'>{item.strMeal}</p>
          <span className='pt-1 font2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</span>
        </div>
      </div>
    </div>
    </>
  )
}
