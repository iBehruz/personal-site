
import React from "react"
import styled from "styled-components"

import Hero from "../components/sections/hero"
import Layout from "../components/layout"
import Projects from "../components/sections/projects"
import About from "../components/sections/about"
import Jobs from "../components/sections/jobs"
import Featured from "../components/sections/featured"
import Contact from "../components/sections/contact"
import Certificates from "../components/sections/certificates"


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
      <Certificates />
      <Contact />
      
    </StyledMainContainer>
  </Layout>
);


export default IndexPage;


