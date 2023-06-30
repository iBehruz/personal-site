import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { usePrefersReducedMotion } from "../../hooks";
const StyledHeroSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
align-items: flex-start;
min-height: 100vh;
height: 100vh;
padding: 0;

@media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
  height: auto;
  padding-top: var(--nav-height);
}

h1 {
  margin: 0 0 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
}

h3 {
  margin-top: 5px;
  color: var(--slate);
  line-height: 0.9;
}

p {
  margin: 30px 0 0!important;
  max-width: 540px;
}

.email-link {
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
  margin-top: 50px;
}
`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      const timeout = setTimeout(() => setIsMounted(true), 1000);
      return () => clearTimeout(timeout);
    }, []);
  
    const one = <h1>Hi, my name is</h1>;
    const two = <h2 className="big-heading">Ilkhomov Bekhruz.</h2>;
    const three = <h3 className="big-heading">I build things for the web.</h3>;
    const four = (
      <>
        <p>
          I’m a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible, human-centered products
          at{' '}
          <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
            Upstatement
          </a>
          .
        </p>
      </>
    );
    const five = (
      <a
        className="email-link"
        href="https://www.newline.co/courses/build-a-spotify-connected-app"
        target="_blank"
        rel="noreferrer">
        Check out my course!
      </a>
    );
  
    const items = [one, two, three, four, five];
  
    return (
        <>
        <StyledHeroSection>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
            </StyledHeroSection>
        </>

    );
  };
  
  export default Hero;