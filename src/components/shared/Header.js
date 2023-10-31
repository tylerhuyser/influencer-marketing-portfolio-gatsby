import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
import { useScrollDirection } from '../../hooks'
import useWindowSize from '../../hooks/useWindowSize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faXmark,
          faBars 
} from "@fortawesome/free-solid-svg-icons"

import IconLogo from './IconLogo';

import "../../styles/Header.css"

export default function Header(props) {

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [caseStudyVisibility, setCaseStudyVisibility] = useState(false)

  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  };

  const toggleCaseStudyVisibility = () => {
    setCaseStudyVisibility(!caseStudyVisibility);
  };

  const toggleCombinedVisibility = () => {
    setMenuVisibility(false);
    setCaseStudyVisibility(false);
  }

  let windowSize = useWindowSize()
  
  return (
    <>
      <div className="header-container slide-in-top-header" style={

        (windowSize.width <= 768 && scrollDirection === 'up' && !scrolledToTop) ?
          { transform: 'translateY(0px)',
            boxShadow: 'none',
            height: "calc(75px - 20px)"
          }
          :
          (windowSize.width <= 768 && scrollDirection === 'down' && !scrolledToTop) ?
            {
              transform: 'translateY(-75px)',
              boxShadow: 'none',
              height: "calc(75px - 20px)"
            }
            :
            (windowSize.width > 768 && scrollDirection === 'up' && !scrolledToTop) ?
            { transform: 'translateY(0px)',
              boxShadow: 'none',
              height: "calc(100px - 20px)"
            }
            :   
            (windowSize.width > 768 && scrollDirection === 'down' && !scrolledToTop) ?
            {
              transform: 'translateY(-100px)',
              boxShadow: 'none',
              height: "calc(100px - 20px)"
              }
              :
              { transform: 'none' }
        }> 

          <Link to="/" className="header-logo-container" onClick={() => toggleCombinedVisibility()} >

            <IconLogo windowSize={windowSize} />
                      
          </Link>

      <div className="desktop-nav-links-container">

          <Link to={`/`} className="desktop-nav-link">HOME</Link>

          <a className="desktop-nav-link" href="#about-section">ABOUT</a>           
              
          <p className={caseStudyVisibility ? 'desktop-nav-switch toggled-open' : 'desktop-nav-switch toggled-closed'} id="desktop-case-studies-switch" onClick={() => toggleCaseStudyVisibility()}>CASE STUDIES</p>


          <div className={caseStudyVisibility ? `desktop-case-study-categories-container` : `desktop-case-study-categories-container hidden`}>

            <Link to={`/social`} className={caseStudyVisibility ? 'desktop-case-studies-link' : 'desktop-case-studies-link hidden'} onClick={() => setCaseStudyVisibility(false)}>SOCIAL</Link>
            <Link to={`/video`} className={caseStudyVisibility ? 'desktop-case-studies-link' : 'desktop-case-studies-link hidden'} onClick={() => setCaseStudyVisibility(false)}>VIDEO</Link>
            <Link to={`/experiential`} className={caseStudyVisibility ? 'desktop-case-studies-link' : 'desktop-case-studies-link hidden'} onClick={() => setCaseStudyVisibility(false)}>EXPERIENTIAL</Link>

          </div>
          
              
          <a className="desktop-nav-link" href="#contact-form" id="contact-form-link">CONTACT</a>

      </div>

      <div className='mobile-navigation-icons-container'>

      {menuVisibility ?
        
        <FontAwesomeIcon icon={faXmark} className='mobile-icon' onClick={() => toggleCombinedVisibility()} />
          
        :

        <FontAwesomeIcon icon={faBars} className='mobile-icon' onClick={() => toggleMenuVisibility()} />

      }

      </div>

      </div>

      <div className={menuVisibility ? "mobile-menu mobile-menu-visible" : "mobile-menu mobile-menu-hidden"}>

        <Link className="mobile-nav-link" to={`/`} onClick={() => setMenuVisibility(false)}>HOME</Link>
        <a className="mobile-nav-link" href="#about-section"  onClick={() => setMenuVisibility(false)}>ABOUT</a>
        <p className={caseStudyVisibility ? 'mobile-nav-switch toggled-open' : 'mobile-nav-switch toggled-closed'} id="mobile-case-studies-switch" onClick={() => toggleCaseStudyVisibility()}>CASE STUDIES</p>
        
        <div className={caseStudyVisibility ? `mobile-case-study-categories-container` : 'mobile-case-study-categories-container hidden'}>
          <Link to={`/social`} className={caseStudyVisibility ? `mobile-case-studies-link` : 'mobile-case-studies-link hidden'} onClick={() => toggleCombinedVisibility()}>SOCIAL</Link>
          <Link to={`/video`} className={caseStudyVisibility ? `mobile-case-studies-link` : 'mobile-case-studies-link hidden'} onClick={() => toggleCombinedVisibility()}>VIDEO</Link>
          <Link to={`/experiential`} className={caseStudyVisibility ? `mobile-case-studies-link` : 'mobile-case-studies-link hidden'} onClick={() => toggleCombinedVisibility()}>EXPERIENTIAL</Link>
        </div>

        <a className="mobile-nav-link" href="#contact-form">CONTACT</a>

      </div>
    </>
  )
}
