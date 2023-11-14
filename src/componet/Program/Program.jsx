import React from 'react'
import './program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Program = () => {
    return (
        <div className="program" id="program">
            {/* header */}
            <div className="program-header">
                <span className='stroke-text'>Explore our </span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <p>Join Now</p>
                            <span><img src={RightArrow} alt="" /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Program