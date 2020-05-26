import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';

import 'swiper/css/swiper.min.css';
import '../swiperstyles.css';

export default function Slider({ children }) {
  useEffect(() => {
    console.log('slider is rerendering');
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    });
  }, [children]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {children}
      </div>
      <div className="swiper-scrollbar" />
    </div>

  );
}

Slider.propTypes = {
  children: PropTypes.isRequired,
};
