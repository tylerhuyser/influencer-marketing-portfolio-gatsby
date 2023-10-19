import React, { useState, useEffect } from 'react';
import anime from 'animejs';

import "../../styles/Loader.css"


export default function Loader(props) {

  const { finishLoading } = props
  
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo polygon',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo svg g',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isLoaderMounted, setIsLoaderMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaderMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (

    <div className="loader-container">

      <div className="logo-wrapper" syle={
        isLoaderMounted ? {opacity: 1} : {opacity: 0}
      }>

        LOADING...

      </div>

    </div>
      

  );
};