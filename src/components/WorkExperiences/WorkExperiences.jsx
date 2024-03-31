import React, { useRef } from 'react'
import { work_experience } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './WorkExperience.css'
const WorkExperiences = () => {
    const sliderRef = useRef();
    const setting={
        dots : false, 
        infinite : true ,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint: 769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };
    const slideRight=()=>{
        sliderRef.current.slickNext();
    };
    const slideLeft=()=>{
        sliderRef.current.slickPrev();
    }
return (
    <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-symbols-outlined">
                <FaAngleRight />

                </span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-symbols-outlined">
                <FaAngleLeft />
                </span>
            </div>
            <Slider ref={sliderRef}{...setting}>
            {work_experience.map((item)=>(
                <ExperienceCard  key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
)
}

export default WorkExperiences;