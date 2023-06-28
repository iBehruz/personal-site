import React from "react";
import styled, { css } from "styled-components";



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

const UlR = styled.ul`
    display: flex;
    margin-top: 20px;
        li {
            margin-right: 20px;
            color: #aaa;
            font-family: monospace;
        }
    }
`

const UlL = styled.ul`
    display: flex;
    justify-content: end;
    margin-top: 20px;
        li {
            margin-right: 20px;
            color: #aaa;
            font-family: monospace;
        }
    }
`


const ContentR = styled.div`
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
const ContentL = styled.div`
    position: relative;
    text-align: end;
    grid-column: 6 / -1;
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

const ImgR = styled.div`
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

const ImgL = styled.div`
        position: relative;
        z-index: -1;
        background-color: #64ffda;
        background: linear-gradient(0.4turn, #64ffda, #64ff8d);
        border-radius: 2px;


        grid-column: 1 / 7;
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

    const timeout =  0;
    const fadeClass = 'fade' ;
    const fadeDownClass = 'fadedown' ;
    console.log("props.langs");
    console.log(props)
    
    return (
    <ProjectContained>
        <Project>
            { props.reversed != true ?
            <ContentR>
                <Label>
                    {props.label}
                </Label>
                <Title>
                    {props.title}
                </Title>
                <Details>
                <p>{props.details}</p>
                <UlR>
                     {props.langs.map((lang: string) => (
                        <li>
                           {lang}
                        </li>
                    ))}
                </UlR>
                </Details>
            </ContentR> : 
            <ContentL>
            <Label>
                {props.label}
            </Label>
            <Title>
                {props.title}
            </Title>
            <Details>
            <p>{props.details}</p>
            <UlL>
                 {props.langs.map((lang: string) => (
                    <li>
                       {lang}
                    </li>
                ))}
            </UlL>
            </Details>
        </ContentL>
             }

             {  props.reversed != true ?
            <ImgR >
              <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
            </ImgR> :
            <ImgL >
            <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
          </ImgL>
            } 
       

        </Project>
     </ProjectContained>
   )}

export default ProjectContainer;

