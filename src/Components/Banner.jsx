import React from 'react'
import bannerImg from '../assets/banner-img.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner container-fluid'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 content">
                    <div>
                        <h1>Your Idea Matters!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, velit ducimus illo neque, dolor corrupti saepe obcaecati molestiae exercitationem a similique at repellat? Quas, veritatis.</p>
                        <Link className='button'>Make a Website</Link>
                    </div>
                </div>
                <div className="col-lg-6 image">
                    <img src={bannerImg} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
