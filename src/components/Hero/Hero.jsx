import React from 'react';
import './Hero.css';
import { Header } from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

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
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
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

        {/* right side */}
        <div className="right-h">
            <button className="btn">Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span> 116 bpm</span>
            </div>

            {/* hero image */}
            <img src={hero_image} alt="" className="hero-image" />
            <img src={hero_image_back} alt="" className="hero-image-back" />

            {/* calories */}
            <div className="calories">
                <img src={Calories} alt="" />
                <div><span>Calories Burned</span><span>220 kcal</span></div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero