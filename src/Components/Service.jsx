import React from 'react'
import cartImage1 from '../assets/cart-image1.png'
import cartImage2 from '../assets/cart-image2.png'
import cartImage3 from '../assets/cart-image3.png'


const Service = () => {
  return (
    <div className='service container-fluid'>
        <div className="container">
        <h2 className='heading'>Our Service</h2>
        <div className="row">
            <div className="col-lg-4 col-mg-4 col-sm-4 col-12">
                <img src={cartImage1} />
            </div>
            <div className="col-lg-4 col-mg-4 col-sm-4 col-12">
                <img src={cartImage2} />
            </div>
            <div className="col-lg-4 col-mg-4 col-sm-4 col-12">
                <img src={cartImage3} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Service
