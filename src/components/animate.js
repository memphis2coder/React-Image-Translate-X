import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Animate text 
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};

//Animate Picture
export const picture = elem => {
    gsap.fromTo(elem, {
        width: 0,
        width: 100%
    })
}