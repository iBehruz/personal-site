import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Loader from './loader';
import Nav from './nav';
import Projects from './sections/projects';
import { GlobalStyle, theme } from '../styles';
import Social from './social';
import Email from './email';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContentLoader = styled.div`

display flex;
justify-content: center;
align-items: center;
`;

const Layout = ({ children, location }: any) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <div id="root">
      <ThemeProvider theme={theme}>
          <GlobalStyle />
        
          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>

          {isLoading ? (
            <StyledContentLoader>
            <Loader finishLoading={() => setIsLoading(false)} />
            </StyledContentLoader>
          ) : (
            <StyledContent>
      
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
               {/* <Footer /> */}
              </div>
            </StyledContent>
          )}
      </ThemeProvider>  
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
