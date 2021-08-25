import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const ServicesSection = (props) => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum saepe eos ducimus doloribus sed, quidem odit libero impedit incidunt minima molestiae voluptates sit qui, dolores quis? Eaque, nostrum consequuntur."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Artificial"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum saepe eos ducimus doloribus sed, quidem odit libero impedit incidunt minima molestiae voluptates sit qui, dolores quis? Eaque, nostrum consequuntur."
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Game Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum saepe eos ducimus doloribus sed, quidem odit libero impedit incidunt minima molestiae voluptates sit qui, dolores quis? Eaque, nostrum consequuntur."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;

    .mid-card {
      margin: 0 1.2rem;
    }
  }
`;

export default ServicesSection;
