import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import useWindowSize from '../../hooks/useWindowSize';

import IconLogo from './IconLogo';

import "../../styles/Loader.css"


export default function Loader(props) {

  const { finishLoading } = props
  
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.loader-icon-logo',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '.loader-icon-logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader-logo-container',
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

  let windowSize = useWindowSize()

  return (

    <div className="loader-container">

      <div className="loader-logo-container" style={
        isLoaderMounted ? {opacity: "1"} : {opacity: "0"}
      }>

        <IconLogo windowSize={windowSize} component="loader" />

      </div>

    </div>
      

  );
};