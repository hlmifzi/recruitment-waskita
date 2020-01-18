import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'
import Slider1 from '../../assets/slider/slider-datengaja-1.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const listSliders = [
        {
            pathSlider: 'https://oyebesmartest.com/public/uploads/preview/-11554995089r6qgr8bent.jpg',
            titleSlider: 'First slide label',
            descSlider: 'Nulla vitae elit libero, a pharetra augue mollis interdum'
        },
        {
            pathSlider: Slider1,
            titleSlider: 'First slide label',
            descSlider: 'Nulla vitae elit libero, a pharetra augue mollis interdum'
        }
    ]

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >

            {
                listSliders.map((v, i) => (
                    <Carousel.Item className='h-80'>
                        <img
                            className="d-block w-100"
                            src={v.pathSlider}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{v.titleSlider}</h3>
                            <p>{v.descSlider}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }


        </Carousel>
    );
}

export default ControlledCarousel
