import React from 'react'
import './hero.css';
//images
import duck from '../../images/Duck.jpg'
import eagle from '../../images/Eagle.jpg'

function Hero() {
    return (
        <div className="container">
            <div className="section1">
                <h1 className="title">Section 1</h1>
                    <div className="img-container">
                        <div className="flex">
                            <img src={duck} alt="duck" />
                            <img src={eagle} alt="duck" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Hero
