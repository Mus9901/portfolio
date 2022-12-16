import Slider from "react-slick";
import styles from './Slider.module.scss'
import { CodeSnippet } from "./CodeSnippet";
import React, {useRef} from 'react'


export default function SliderSnippet() {
    const sliderRef = useRef(null)
    const settings = {
        // dots: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        centerPadding: "1px",
        // autoplay: false,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        // beforeChange: (current, next) => setActiveSlide(next),
        // adaptiveHeight: true,
        // focusOnSelect: true,
      
        // slidesToScroll: 6,
        // centerMode: true,
        // centerPadding: '25px',
        // className: 'slider variable-width',
        // variableWidth: true,
      };
    return (
        <div className={styles.root}>
            <div className={styles.slider}>
                <Slider {...settings} ref={sliderRef}>
                    <CodeSnippet />
                    <CodeSnippet />
                    <CodeSnippet />
                </Slider>
            </div>
        </div>
    )
}