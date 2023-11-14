import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* {the best ad} */}
            <div className="the-best-ad">
              <div></div>
              <span>The best fitness club in the town</span>
            </div>
            {/* {Hero Heading} */}
            <div className="hero-text">
              <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
              </div>
              <div><span>Ideal Body</span></div>
              <div>
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni dignissimos asperiores, modi blanditiis sed?
                </span>
              </div>
            </div>
            {/* {figurez} */}
            <div className="figures">
              <div>
                <span>+14</span>
                <span>expert</span>
              </div>
              <div>
                <span>+978</span>
                <span>member joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>fitness progress</span>
              </div>
            </div>
            {/* {the hero buttons} */}
            <div className="hero-buttons">
              <button className="btn">Get started</button>
              <button className="btn">Learn More</button>
            </div>
        </div> 

        <div className="right-h">
          <button className='btn'>Join now</button>

          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart rate</span><span> 116 bpm</span>
          </div>
          {/* hero 1 */}
          <img src={hero_image} alt="" className='hero-image'/>
          <img src={hero_image_back} alt="" className='hero-image-back' />
          {/* calories */}
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories burned</span> 
            <span>220 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero