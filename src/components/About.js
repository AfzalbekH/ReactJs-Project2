import React from 'react'
import john from './images/john.png';
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <img src={john} alt='john' />
            <div className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>Intence is an International Financial Planing company with officesin multiple jurisdictions over the world. Working with intense gives me the ability to  advise internet ional exxpatriaties living in the middle east  from where I live in  USA. </p>
                <p> I am John Doe, a senior adviser for an independently owned financial planning compmany calledd Intence</p>
                <button className='button'> Explore More</button>
                

            </div>

        </div>

    </div>
  )
}

export default About;