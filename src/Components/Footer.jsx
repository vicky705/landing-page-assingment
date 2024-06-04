import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer container-fluid'>
      <div className="container">
        <div className="link1">
            <ul>
                <li><Link >About</Link></li>
                <li><Link >News</Link></li>
                <li><Link >Hosting</Link></li>
                <li><Link >Privacy</Link></li>
            </ul>
        </div>
        <div className="link2">
            <ul>
                <li><Link >Showcase</Link></li>
                <li><Link >Themes</Link></li>
                <li><Link >Plugins</Link></li>
                <li><Link >Patterns</Link></li>
            </ul>
        </div>
        <div className="link3">
            <ul>
                <li><Link >Learn</Link></li>
                <li><Link >Documentation</Link></li>
                <li><Link >Developers</Link></li>
                <li><Link >WordPress.tv</Link></li>
            </ul>
        </div>
        <div className="link4">
            <ul>
                <li><Link >Get Involved</Link></li>
                <li><Link >Events</Link></li>
                <li><Link >Donate</Link></li>
                <li><Link >Swag Store</Link></li>
            </ul>
        </div>
        <div className="link5">
            <ul>
                <li><Link >WordPress.com</Link></li>
                <li><Link >Matt</Link></li>
                <li><Link >bbPress</Link></li>
                <li><Link >BuddyPress</Link></li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
