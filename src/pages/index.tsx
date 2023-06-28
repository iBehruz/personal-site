
import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import ProjectContainer from "../components/project_container"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  overflow-x: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: system, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  margin: 0;
  background-color: #121212;
}

a {
  display: inline-blesock;
  color: inherit;
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

button {
  border: 0;
  outline: 0;
  cursor: pointer;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

img {
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
}

@mixin outline {
  outline: 1px solid red;
}

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
}

@mixin tablet {
  @media (max-width: 600px) {
    @content;
  }
}
`



const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`


const User = (props: any) => {
 return (<UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)}

export default function UsersList() {
  const props = {
    label: "Game of Thrones",
    title: "A Clash of Kings",
    details:"Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    langs: ["Monday", "Demon", "JavaScript"]
  }
  const props2 = {
    reversed: true,
    label: "Game of Thrones",
    title: "A Clash of Kings",
    details:"Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    langs: ["Monday", "Demon", "JavaScript"]
  }
  return (

          <React.Fragment>
            <GlobalStyle />
            <Hero />
            <ProjectContainer 
              {...props}
            />
                  <ProjectContainer 
              {...props2}
            />
                  <ProjectContainer 
              {...props}
            />
          </React.Fragment>

  );
}



// export default function UsersList() {

  
//   return (


    

//       <ProjectContainer/>
//     //   <Container>
//     //   <br/>
//     //   <h1>About Styled Components</h1>
//     //   <p>Styled Components is cool</p>
//     //   <User
//     //     username="Jane Doe"
//     //     avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s"
//     //     excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     //   />
//     //   <User
//     //     username="Bob Smith"
//     //     avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhG_cZjxXIlwfsjseD7-LMSMzWI7txguoSLjCbwM85&s"
//     //     excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//     //   />
//     // </Container>
//   )
// }