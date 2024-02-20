import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the Legends of the Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro aut ipsa ducimus odit sequi delectus quis provident, dicta, vitae deserunt et praesentium dolor eveniet blanditiis dolorem suscipit consectetur laboriosam.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt='header image' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader