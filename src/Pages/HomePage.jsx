import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particles";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

const HomePage = (props) => {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I am<span>Lorem Ipsum</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          recusandae, natus dolorum magnam alias aut iusto dignissimos animi sed
          distinctio! Lorem ipsum dolor sit amet.
        </p>
        <div className="icons">
          <a href="https://codepen.io/pen" className="icon i-facebook">
            <FacebookIcon />
          </a>
          <a href="https://codepen.io/pen" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://codepen.io/pen" className="icon i-youtube">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .particle-con {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all .4s ease-in-out;

        &:hover {
            border: 2px solid var(--primary-color);
            color: var(--primary-color)
        }

        &:not(:last-child) {
            margin-right: 1rem;
        }

        svg {
            margin: .5rem;
        }

        
      }

      .i-youtube {
        &:hover {
            border: 2px solid red;
            color: red;
        }
      }

      .i-github {
        &:hover {
            border: 2px solid #5f4687;
            color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
