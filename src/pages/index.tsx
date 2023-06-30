
import React from "react"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import ProjectContainer from "../components/project_container"
import Nav from "../components/nav"
import Hero from "../components/sections/hero"
import Layout from "../components/layout"
import Projects from "../components/sections/projects"
import About from "../components/sections/about"
import Jobs from "../components/sections/jobs"
import Featured from "../components/sections/featured"
import Contact from "../components/sections/contact"


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }: any) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About/>
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
      
    </StyledMainContainer>
  </Layout>
);


export default IndexPage;


