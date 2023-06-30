import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';



const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 150 170" width={150} height={150}>
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(30, 30)">
        <path
          d="M1.01847 39V11.7273H8.58239V39H1.01847ZM4.81818 8.21165C3.69366 8.21165 2.72893 7.83878 1.92401 7.09304C1.13092 6.33546 0.734375 5.42992 0.734375 4.37642C0.734375 3.33475 1.13092 2.44105 1.92401 1.69531C2.72893 0.937735 3.69366 0.558947 4.81818 0.558947C5.94271 0.558947 6.90152 0.937735 7.6946 1.69531C8.49953 2.44105 8.90199 3.33475 8.90199 4.37642C8.90199 5.42992 8.49953 6.33546 7.6946 7.09304C6.90152 7.83878 5.94271 8.21165 4.81818 8.21165ZM14.7836 39V2.63636H29.3432C32.0184 2.63636 34.2497 3.03291 36.0371 3.82599C37.8245 4.61908 39.168 5.71993 40.0676 7.12855C40.9673 8.52533 41.4171 10.1352 41.4171 11.9581C41.4171 13.3786 41.133 14.6274 40.5648 15.7045C39.9966 16.7699 39.2154 17.6458 38.2211 18.3324C37.2386 19.0071 36.1141 19.4865 34.8475 19.7706V20.1257C36.2324 20.1849 37.5286 20.5755 38.736 21.2976C39.9552 22.0196 40.9436 23.0317 41.7012 24.3338C42.4587 25.6241 42.8375 27.1629 42.8375 28.9503C42.8375 30.8797 42.3581 32.602 41.3993 34.1172C40.4524 35.6205 39.0497 36.8101 37.1912 37.6861C35.3328 38.562 33.0423 39 30.3198 39H14.7836ZM22.4718 32.7145H28.7395C30.882 32.7145 32.4445 32.3061 33.427 31.4893C34.4095 30.6607 34.9007 29.5599 34.9007 28.1868C34.9007 27.1806 34.6581 26.2929 34.1728 25.5234C33.6874 24.754 32.995 24.1503 32.0953 23.7124C31.2076 23.2744 30.1481 23.0554 28.9171 23.0554H22.4718V32.7145ZM22.4718 17.853H28.1713C29.2248 17.853 30.16 17.6695 30.9767 17.3026C31.8053 16.9238 32.4564 16.3911 32.9299 15.7045C33.4152 15.018 33.6578 14.1953 33.6578 13.2365C33.6578 11.9226 33.1903 10.8632 32.2551 10.0582C31.3319 9.25331 30.0179 8.85085 28.3134 8.85085H22.4718V17.853Z"

          fill="currentColor"
        />
      </g>
      <g id="C" transform="translate(50, 50)">
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"

        d="M 56.432, 23.96
                  L 23.96100, 56.4
                  L -21.961, 56.432
                  L -54.43, 23.9610
                  L -54.43, -21.961
                  L -21.961, -54.432
                  L 23.9610, -54.4327
                  L 56.432, -21.9610 z"
      />
      </g>
    </g>
  </svg>
);


interface propStyledLoader {
    isMounted: boolean
}

const StyledLoader = styled.div<propStyledLoader>`

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  z-index: 99;
  text-align: -webkit-center;
  .logo-wrapper {
    height: 100%;
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
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

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>


      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
