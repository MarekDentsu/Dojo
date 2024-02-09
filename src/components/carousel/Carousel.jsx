import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from '../../plugins/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

import Slider from "react-slick";
import { data } from './data.js'

import { useLayoutEffect, useRef } from "react";
import CarouselCard from "./CarouselCard.jsx";
import useResize from "../../hooks/UseResize.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-override.scss';

import leftArrowURL from '../../assets/arrow-left.svg'
import rightArrowURL from '../../assets/arrow-right.svg'

// 

export default function Carousel(props) {
    const sliderRef = useRef()
    const carouselRef = useRef()
    const navRef = useRef()
    const sliderHolderRef = useRef()
    const size = useResize()

    const Arrows = () => {
        return (
            <div className="slick-nav" ref={navRef}>
                <h3>Recent Projects</h3>
                <div className="arrows">
                    <div
                        className="arrow-btn prev"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <img src={leftArrowURL} alt="left" />
                    </div>
                    <div
                        className="arrow-btn next"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <img src={rightArrowURL} alt="left" />
                    </div>
                </div>
            </div>
        );
    };


    useLayoutEffect(() => {

        if (sliderRef.current) {
            let ctx = gsap.context(() => {

                const tl = new gsap.timeline({
                    scrollTrigger: {
                        trigger: carouselRef.current,
                        start: "top 90%",
                        end: "bottom 30%",
                    },
                    delay: 0.35
                })
                    .from(navRef.current, {
                        y: 60,
                        opacity: 0,
                        ease: Power2.easeOut,
                        duration: 0.75,
                    })
                    .from(".slick-slide", {
                        y: 50,
                        opacity: 0,
                        ease: Power2.easeOut,
                        duration: 0.75,
                        stagger: 0.1
                    }, "-=0.75")

            }, carouselRef.current); 
            return () => ctx.revert();
        }
    }, [carouselRef]);


    const getSlidesToShow = () => {
        let n = 3;
        if (size.width <= 600) n = 1
        if (size.width > 1024 && size.width < 1250) n = 2

        return (n)
    }

    return (
        <div className="carousel" ref={carouselRef}>

            <Arrows />
            <div ref={sliderHolderRef}>
                <Slider
                    dots={false}
                    arrows={false}
                    ref={sliderRef}
                    infinite={true}
                    speed={500}
                    slidesToShow={getSlidesToShow()}
                    slidesToScroll={1}
                >
                    {data.map((cardData, i) => {
                        return (<CarouselCard
                            key={"carousel-card-" + i}
                            {...cardData}
                        />)
                    })
                    }
                </Slider>
            </div>
        </div>
    )
}


