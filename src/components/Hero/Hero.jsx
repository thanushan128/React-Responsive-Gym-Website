import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>

            {/* The best ad */}
            <div className="the-best-ad">
                <div></div>
                <span>The best fitness club in the town</span>
            </div>

            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal live up your life to fullest</span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
                <div>
                    <span>+150</span>
                    <span>Expect coachs</span>
                </div>
                <div>
                    <span>+1000</span>
                    <span>Numbers Joined</span>
                </div>
                <div>
                    <span>+45</span>
                    <span>Fitness Program</span>
                </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>

        
        <div className="right-h">Roght side</div>
    </div>
  )
}

export default Hero