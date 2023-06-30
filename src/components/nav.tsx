import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';

import { useScrollDirection, usePrefersReducedMotion } from '../hooks';
import  Menu  from './menu';

const styleSvg = styled.svg`
height: 60px;
width: 60px;
`;
//import { IconLogo, IconHex } from '@components/icons';
const IconHex = () => (
  <svg id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 140" height={60} width={60}>
    <title>Hexagon</title>
    <g transform="translate(0.000000, 10.000000)">
      <g transform="translate(50, 50)">
        <polygon
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="56.43277195067721,23.961005941905388 23.96100594190539,56.43277195067721 -21.961005941905384,56.43277195067721 -54.43277195067721,23.961005941905395 -54.432771950677214,-21.96100594190538 -21.96100594190542,-54.43277195067719 23.961005941905402,-54.4327719506772 56.43277195067719,-21.961005941905423"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);



const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg"  role="img" viewBox="0 0 84 140" height={60} width={60}>
    <title>Logo</title>
    <g transform="translate(0.000000, 10.000000)">
      <g transform="translate(50, 50)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="56.43277195067721,23.961005941905388 23.96100594190539,56.43277195067721 -21.961005941905384,56.43277195067721 -54.43277195067721,23.961005941905395 -54.432771950677214,-21.96100594190538 -21.96100594190542,-54.43277195067719 23.961005941905402,-54.4327719506772 56.43277195067719,-21.961005941905423"

        />
        <g transform="translate(-20, -20)">
        <path
          d="M1.01847 39V11.7273H8.58239V39H1.01847ZM4.81818 8.21165C3.69366 8.21165 2.72893 7.83878 1.92401 7.09304C1.13092 6.33546 0.734375 5.42992 0.734375 4.37642C0.734375 3.33475 1.13092 2.44105 1.92401 1.69531C2.72893 0.937735 3.69366 0.558947 4.81818 0.558947C5.94271 0.558947 6.90152 0.937735 7.6946 1.69531C8.49953 2.44105 8.90199 3.33475 8.90199 4.37642C8.90199 5.42992 8.49953 6.33546 7.6946 7.09304C6.90152 7.83878 5.94271 8.21165 4.81818 8.21165ZM14.7836 39V2.63636H29.3432C32.0184 2.63636 34.2497 3.03291 36.0371 3.82599C37.8245 4.61908 39.168 5.71993 40.0676 7.12855C40.9673 8.52533 41.4171 10.1352 41.4171 11.9581C41.4171 13.3786 41.133 14.6274 40.5648 15.7045C39.9966 16.7699 39.2154 17.6458 38.2211 18.3324C37.2386 19.0071 36.1141 19.4865 34.8475 19.7706V20.1257C36.2324 20.1849 37.5286 20.5755 38.736 21.2976C39.9552 22.0196 40.9436 23.0317 41.7012 24.3338C42.4587 25.6241 42.8375 27.1629 42.8375 28.9503C42.8375 30.8797 42.3581 32.602 41.3993 34.1172C40.4524 35.6205 39.0497 36.8101 37.1912 37.6861C35.3328 38.562 33.0423 39 30.3198 39H14.7836ZM22.4718 32.7145H28.7395C30.882 32.7145 32.4445 32.3061 33.427 31.4893C34.4095 30.6607 34.9007 29.5599 34.9007 28.1868C34.9007 27.1806 34.6581 26.2929 34.1728 25.5234C33.6874 24.754 32.995 24.1503 32.0953 23.7124C31.2076 23.2744 30.1481 23.0554 28.9171 23.0554H22.4718V32.7145ZM22.4718 17.853H28.1713C29.2248 17.853 30.16 17.6695 30.9767 17.3026C31.8053 16.9238 32.4564 16.3911 32.9299 15.7045C33.4152 15.018 33.6578 14.1953 33.6578 13.2365C33.6578 11.9226 33.1903 10.8632 32.2551 10.0582C31.3319 9.25331 30.0179 8.85085 28.3134 8.85085H22.4718V17.853Z"
          fill="currentColor"
        />
        </g>
      </g>
    </g>
  </svg>
);



const navLinks = [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ];



const loaderDelay = 2000;

interface Props {
    scrollDirection: any;
    scrolledToTop: any;
  }



const StyledHeader = styled.header<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(19, 19, 20, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(19, 19, 20, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: var(--green);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          polygon {
            fill: var(--navy);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    color: darkgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      &:hover{
        color: rgb(100, 255, 218);
      }
      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--green);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Nav = ({ isHome = true }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

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

  const Logo = (
    <div className="logo" tabIndex={-1}>
      {isHome ? (
        <a href="/" aria-label="home">
          <div className="hex-container">
            <IconHex/>
          </div>
          <div className="logo-container">
            <IconLogo/>
          </div>
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <div className="hex-container">
            <IconHex/>
          </div>
          <div className="logo-container">
            <IconLogo/>
          </div>
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>

          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledLinks>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>

      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
