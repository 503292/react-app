import React, { Component, useState } from 'react';

import Helmet from 'react-helmet';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import useWindowSize from '../../../hooks/useWindowSize';

import css from './Reviews.module.scss';

// const review = [{ desr: '000000' }, { desr: '111111' }, { desr: '222222' }];
const OneSlide = ({ descr }) => {
  return <div className={css.oneRewiev}>{descr}</div>;
};

const Reviews = () => {
  const diviceWidth = useWindowSize().width;
  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([
    <OneSlide descr="Good company 1" />,
    <OneSlide descr="Good company 2" />,
    <OneSlide descr="Good company 3" />,
  ]);

  const handleChange = value => {
    setValue(value);
  };

  return (
    <div>
      <Carousel
        dots
        infinite
        // arrows
        slidesPerPage={diviceWidth > 768 ? 2 : 1}
        //   autoPlay={5000}
        stopAutoPlayOnHover
        value={value}
        slides={slides}
        onChange={handleChange}
      />

      <Helmet>
        <style>
          {`
    .BrainhubCarousel__dots .BrainhubCarousel__dot  {
        background: none;
    }
    .BrainhubCarousel__arrows {
        background-color: #efefef; 
        border-radius: 50%;
    }
    .BrainhubCarousel__arrows:hover:enabled {
        background-color: #0083cd;
    }
    .BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track{
        padding: 10px 0;
    }
    `}
        </style>
      </Helmet>
    </div>
  );
};

export default Reviews;
