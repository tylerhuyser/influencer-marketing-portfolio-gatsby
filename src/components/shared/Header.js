import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
  const [caseStudyCategoryVisibility, setCaseStudyCategoryVisibility] = useState(false)

  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
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

  const changeMenuVisibility = (e) => {
    e.preventDefault();
    setMenuVisibility(!menuVisibility);
  };

  const changeCaseStudyVisibility = (e) => {
    e.preventDefault();
    setCaseStudyCategoryVisibility(!caseStudyCategoryVisibility);
  };

  const changeMenuAndCaseStudyVisibility = () => {
    setMenuVisibility(false);
    setCaseStudyCategoryVisibility(false);
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
          
        {isMounted && (

            <Link to="/" className="header-logo-container">

              <IconLogo />

              <p className="logo-copy-header">Tyler Huyser</p>
                      
            </Link>
              
        )}

      <div className="desktop-nav-links-container">
              
          {isMounted && (

              <Link to="/" className="desktop-nav-link" style={{ transitionDelay: `${isHome ? 1 * 100 : 0}ms` }}>HOME</Link>

        )}
                          
        {isMounted && (

            <Link to="/about" className="desktop-nav-link" style={{ transitionDelay: `${isHome ? 2 * 100 : 0}ms` }}>ABOUT</Link>

        )}
                          
        {isMounted && (
              
            <p className="desktop-nav-switch" id="desktop-case-studies-switch" style={{ transitionDelay: `${isHome ? 3 * 100 : 0}ms` }} onClick={(e) => changeCaseStudyVisibility(e)}>CASE STUDIES</p>

          )}

          <div className={`desktop-case-study-categories-container ${caseStudyCategoryVisibility}`}>

            <Link to="/social" className='desktop-case-studies-link' onClick={() => setCaseStudyCategoryVisibility(false)}>SOCIAL</Link>
            <Link to="/video" className='desktop-case-studies-link' onClick={() => setCaseStudyCategoryVisibility(false)}>VIDEO</Link>
            <Link to="/experiential" className='desktop-case-studies-link' onClick={() => setCaseStudyCategoryVisibility(false)}>EXPERIENTIAL</Link>

          </div>
          
          {isMounted && (
              
              <a className="desktop-nav-link" href="#contact-form" id="live-scores-link" style={{ transitionDelay: `${isHome ? 3 * 100 : 0}ms` }}>CONTACT</a>
  
          )}

      </div>

      <div className='mobile-navigation-icons-container'>

      {menuVisibility ?
        
        <FontAwesomeIcon icon={faXmark} className='mobile-icon' onClick={(e) => changeMenuVisibility(e)} />
          
        :

        <FontAwesomeIcon icon={faBars} className='mobile-icon' onClick={(e) => changeMenuVisibility(e)} />

      }

      </div>

      </div>

      <div className={menuVisibility ? "mobile-menu mobile-menu-visible" : "mobile-menu mobile-menu-hidden"}>

        <Link className="mobile-nav-link" to="/" onClick={() => setMenuVisibility(false)}>HOME</Link>
        <Link className="mobile-nav-link" to="/about" onClick={() => setMenuVisibility(false)}>ABOUT</Link>
        <p className="mobile-nav-switch" id="mobile-case-studies-switch" onClick={(e) => changeCaseStudyVisibility(e)}>CASE STUDIES</p>
        
        <div className={`mobile-case-study-categories-container ${caseStudyCategoryVisibility}`}>
          <Link to="/social" className='mobile-case-studies-link' onClick={() => changeMenuAndCaseStudyVisibility()}>SOCIAL</Link>
          <Link to="/video" className='mobile-case-studies-link'onClick={() => changeMenuAndCaseStudyVisibility()}>VIDEO</Link>
          <Link to="/experiential" className='mobile-case-studies-link' onClick={() => changeMenuAndCaseStudyVisibility()}>EXPERIENTIAL</Link>
        </div>

        <a className="mobile-nav-link" target="_blank" rel="noopener noreferrer" href="https://www.ace-tennis-scores.com">CONTACT</a>

      </div>
    </>
  )
}
