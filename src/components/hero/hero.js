import React,{useRef, useEffect} from 'react'
import './hero.css';
import { gsap }from 'gsap'
//images
import duck from '../../images/Duck.jpg'
import eagle from '../../images/Eagle.jpg'
import {textIntro} from '../animate';

function Hero() {

    let intro = useRef(null);

    useEffect(() => {
        textIntro(intro)
    },[])

    return (
        <div className="container">
            <div className="section section1">
                <div className="flex">
                    <p className="title" ref={(el) => (intro = el)}>Ducks are mostly aquatic birds, <br></br>mostly smaller than the swans</p>
                    <img src={duck} alt="duck" />
                </div>
            </div>
        </div>
    )
}

export default Hero
