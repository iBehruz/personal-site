import React from "react";
import styled from "styled-components";



const ProjectContained = styled.div`
    max-width: 1000px;
    margin: 50px auto;
`;

const Project = styled.div`
    margin: 30px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    align-items: center;

    @media screen and (max-width: 768px) {
    align-items: flex-start;
    }
`;

const Content = styled.div`
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @include tablet {
    grid-column: 1 / -1;
    padding: 40px;
    }

    .project-label {
    color: #64ffda;
    font-family: monospace;
    }
    .project-title {
    font-size: 2rem;
    margin: 10px 0 30px;
    color: #eee;
    }
    .project-details {
    font-size: 15px;
    line-height: 1.5;
    color: #aaa;

    p {
        background-color: #252525;
        padding: 20px 25px;
        @include tablet {
        background-color: transparent;
        padding: 20px 0;
        }
    }

    ul {
        display: flex;
        margin-top: 20px;

        li {
        margin-right: 20px;
        color: #aaa;
        font-family: monospace;
        }
    }
    }
`

const Label = styled.div`
    color: #64ffda;
    font-family: monospace;
`
const Title = styled.h4`
    font-size: 2rem;
    margin: 10px 0 30px;
    color: #eee;
`
const Details = styled.div`
    font-size: 15px;
    line-height: 1.5;
    color: #aaa;

    p {
    background-color: #252525;
    padding: 20px 25px;
    @include tablet {
        background-color: transparent;
        padding: 20px 0;
    }
    }

    ul {
        display: flex;
        margin-top: 20px;
            li {
                margin-right: 20px;
                color: #aaa;
                font-family: monospace;
            }
        }
    }
`

const Ul = styled.ul`
    display: flex;
    margin-top: 20px;
        li {
            margin-right: 20px;
            color: #aaa;
            font-family: monospace;
        }
    }
`
const Img = styled.div`
        position: relative;
        z-index: -1;
        background-color: #64ffda;
        background: linear-gradient(0.4turn, #64ffda, #64ff8d);
        border-radius: 2px;
        grid-column: 6 / -1;
        grid-row: 1 / -1;

        @media screen and (max-width: 768px) {
        height: 100%;
        }
        @include tablet {
        grid-column: 1 / -1;
        opacity: 0.25;
        }

        &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        background-color: #0a192f;
        mix-blend-mode: screen;
        border-radius: 2px;
        }

        img {
        border-radius: 2px;
        position: relative;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        
        @media screen and (max-width: 768px) {
            object-fit: cover;
            width: auto;
            height: 100%;
        }
        }
`



const ProjectContainer = (props: any) => {
    return (

    <ProjectContained>
        <Project>
            <Content>
                <Label>
                Game of Thrones
                </Label>
                <Title>
                A Clash of Kings
                </Title>
                <Details>
                <p>Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.</p>
                <Ul>
                    <li>Shadow</li>
                    <li>Demon</li>
                    <li>Baby</li>
                </Ul>
                </Details>
            </Content>
            <Img>
                <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
            </Img>
        </Project>
     </ProjectContained>
   )}

export default ProjectContainer;
