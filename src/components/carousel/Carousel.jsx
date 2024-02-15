import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from '../../plugins/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

import Slider from "react-slick";
import { data } from './data.js'

import { useEffect, useLayoutEffect, useRef } from "react";
import CarouselCard from "./CarouselCard.jsx";
import useResize from "../../hooks/UseResize.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../scss/slick-override.scss';

import leftArrowURL from '../../assets/arrow-left-white.svg'
import rightArrowURL from '../../assets/arrow-right-white.svg'

// 

export default function Carousel(props) {
    const slickSliderRef = useRef()
    const carouselContainerRef = useRef()
    const navRef = useRef()
    const sliderHolderRef = useRef()
    const size = useResize()

    const Arrows = () => {
        return (
            <div className="slick-nav" ref={navRef}>
                <h3>Recent Projects</h3>
                <div className="arrows">
                    <div
                        className="arrow-btn prev opacity-hover grey-to-white"
                        onClick={() => slickSliderRef.current.slickPrev()}
                    >
                        <img src={leftArrowURL} alt="left" />
                    </div>
                    <div
                        className="arrow-btn next opacity-hover grey-to-white"
                        onClick={() => slickSliderRef.current.slickNext()}
                    >
                        <img src={rightArrowURL} alt="left" />
                    </div>
                </div>
            </div>
        );
    };

    useEffect(
        () => {
            console.log(slickSliderRef)
        }, [slickSliderRef]
    )


    useLayoutEffect(() => {

        if (slickSliderRef.current) {
            let ctx = gsap.context(() => {

                const tl = new gsap.timeline({
                    scrollTrigger: {
                        trigger: carouselContainerRef.current,
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

            }, carouselContainerRef.current); 
            return () => ctx.revert();
        }
    }, [carouselContainerRef]);


    const getSlidesToShow = () => {
        let n = 3;
        if (size.width <= 600) n = 1
        if (size.width > 1024 && size.width < 1250) n = 2

        return (n)
    }

    return (
        <div className="carousel" ref={carouselContainerRef}>

            <Arrows />
            <div ref={sliderHolderRef}>
                <Slider
                    dots={false}
                    arrows={false}
                    ref={slickSliderRef}
                    infinite={true}
                    speed={500}
                    slidesToShow={getSlidesToShow()}
                    slidesToScroll={1}
                    initialSlide={Math.floor(Math.random() * data.length)}

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


