import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';


import { usePrefersReducedMotion } from '../../hooks';


const KEY_CODES = {
    ARROW_LEFT: 'ArrowLeft',
    ARROW_LEFT_IE11: 'Left',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_RIGHT_IE11: 'Right',
    ARROW_UP: 'ArrowUp',
    ARROW_UP_IE11: 'Up',
    ARROW_DOWN: 'ArrowDown',
    ARROW_DOWN_IE11: 'Down',
    ESCAPE: 'Escape',
    ESCAPE_IE11: 'Esc',
    TAB: 'Tab',
    SPACE: ' ',
    SPACE_IE11: 'Spacebar',
    ENTER: 'Enter',
  };


import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const sr = isSSR ? null : ScrollReveal();


const srConfig = (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  });


const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

interface buttonInterface {
    isActive: boolean
}
const StyledTabButton = styled.button<buttonInterface>`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }: any) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div<{activeTabId: any}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }: any) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }: any) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const data = {
    "jobs": {
        "edges": [
            {
                "node": {
                    "frontmatter": {
                        "title": "Lead Engineer",
                        "company": "Upstatement",
                        "location": "Boston, MA",
                        "range": "May 2018 - Present",
                        "url": "https://www.upstatement.com/"
                    },
                    "html": "<ul>\n<li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>\n<li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>\n<li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>\n<li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>\n</ul>"
                }
            },
            {
                "node": {
                    "frontmatter": {
                        "title": "UI Engineer Co-op",
                        "company": "Apple",
                        "location": "Cupertino, CA",
                        "range": "July - December 2017",
                        "url": "https://www.apple.com/music/"
                    },
                    "html": "<ul>\n<li>Developed and styled interactive web applications for Apple Music using Ember and SCSS</li>\n<li>Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations</li>\n<li>Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback</li>\n<li>Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications</li>\n</ul>"
                }
            },
            {
                "node": {
                    "frontmatter": {
                        "title": "Developer",
                        "company": "Scout Studio",
                        "location": "Northeastern University",
                        "range": "Spring 2016 & 2017",
                        "url": "https://web.northeastern.edu/scout/"
                    },
                    "html": "<ul>\n<li>Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community</li>\n<li>Built and delivered technical solutions according to stakeholder business requirements</li>\n</ul>"
                }
            },
            {
                "node": {
                    "frontmatter": {
                        "title": "Software Engineer Co-op",
                        "company": "Starry",
                        "location": "Boston, MA",
                        "range": "July - December 2016",
                        "url": "https://starry.com/"
                    },
                    "html": "<ul>\n<li>Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS</li>\n<li>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router</li>\n<li>Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps</li>\n</ul>"
                }
            },
            {
                "node": {
                    "frontmatter": {
                        "title": "Creative Technologist Co-op",
                        "company": "MullenLowe",
                        "location": "Boston, MA",
                        "range": "July - December 2015",
                        "url": "https://us.mullenlowe.com/"
                    },
                    "html": "<ul>\n<li>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>\n<li>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness</li>\n<li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>\n</ul>"
                }
            }
        ]
    }
}

  const jobsData = data.jobs.edges;

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(10);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr!.reveal(revealContainer.current!, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus!]) {
       const  tEl: any = tabs.current![tabFocus!];
       tEl.focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus! >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {jobsData &&
            jobsData.map(({ node } : any, i: number) => {
              const { company } = node.frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={ (activeTabId  == i) == true}
                  onClick={() => setActiveTabId(i)}
            
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? 0 : -1}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ node }: any, i: number) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? 0 : -1}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
