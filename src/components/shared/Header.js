import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { loaderDelay } from "../../utils"
import { useScrollDirection } from '../../hooks'
import useWindowSize from '../../hooks/useWindowSize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faXmark,
          faBars 
} from "@fortawesome/free-solid-svg-icons"

import IconLogo from './IconLogo';

import "../../styles/Header.css"


export default function Header(props) {

  const { isHome } = props

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [caseStudyVisibility, setCaseStudyVisibility] = useState(false)

  const [headerMounted, setHeaderMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeaderMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

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

        (windowSize.width <= 758 && scrollDirection === 'up' && !scrolledToTop) ?
          { transform: 'translateY(0px)',
            boxShadow: 'none',
            height: "calc(75px - 20px)"
          }
          :
          (windowSize.width <= 758 && scrollDirection === 'down' && !scrolledToTop) ?
            {
              transform: 'translateY(-75px)',
              boxShadow: 'none',
              height: "calc(75px - 20px)"
            }
            :
            (windowSize.width > 758 && scrollDirection === 'up' && !scrolledToTop) ?
            { transform: 'translateY(0px)',
              boxShadow: 'none',
              height: "calc(100px - 20px)"
            }
            :   
            (windowSize.width > 758 && scrollDirection === 'down' && !scrolledToTop) ?
            {
              transform: 'translateY(-100px)',
              boxShadow: 'none',
              height: "calc(100px - 20px)"
              }
              :
              { transform: 'none' }
        }> 
          
        {headerMounted && (

          <Link to="/" className="header-logo-container" onClick={() => toggleCombinedVisibility()} >

            <IconLogo windowSize={windowSize} />
                      
          </Link>
              
        )}

      <div className="desktop-nav-links-container">
              
          {headerMounted && (

              <Link to={`/`} className="desktop-nav-link" style={{ transitionDelay: `${isHome ? 1 * 100 : 0}ms` }}>HOME</Link>

        )}
                          
        {headerMounted && (

            <a className="desktop-nav-link" href="#about-section" style={{ transitionDelay: `${isHome ? 2 * 100 : 0}ms` }}>ABOUT</a>

        )}
                          
        {headerMounted && (
              
            <p className={caseStudyVisibility ? 'desktop-nav-switch toggled-open' : 'desktop-nav-switch toggled-closed'} id="desktop-case-studies-switch" style={{ transitionDelay: `${isHome ? 3 * 100 : 0}ms` }} onClick={() => toggleCaseStudyVisibility()}>CASE STUDIES</p>

          )}

          <div className={caseStudyVisibility ? `desktop-case-study-categories-container` : `desktop-case-study-categories-container hidden`}>

            <Link to={`/social`} className={caseStudyVisibility ? 'desktop-case-studies-link' : 'desktop-case-studies-link hidden'} onClick={() => setCaseStudyVisibility(false)}>SOCIAL</Link>
            <Link to={`/video`} className={caseStudyVisibility ? 'desktop-case-studies-link' : 'desktop-case-studies-link hidden'} onClick={() => setCaseStudyVisibility(false)}>VIDEO</Link>
            <Link to={`/experiential`} className={caseStudyVisibility ? 'desktop-case-studies-link' : 'desktop-case-studies-link hidden'} onClick={() => setCaseStudyVisibility(false)}>EXPERIENTIAL</Link>

          </div>
          
          {headerMounted && (
              
              <a className="desktop-nav-link" href="#contact-form" id="contact-form-link" style={{ transitionDelay: `${isHome ? 3 * 100 : 0}ms` }}>CONTACT</a>
  
          )}

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
