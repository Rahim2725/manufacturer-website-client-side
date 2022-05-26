import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../../assets/image/placeholder.png'

const Banner = () => {
    return (
        <div className=' my-10 bg-base-200'>
            <Carousel>
                <Carousel.Item>
                    <img className='h-[500px] w-full'  src={image} alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-[500px] w-full' src={image} alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;