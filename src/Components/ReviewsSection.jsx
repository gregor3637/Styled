import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

const ReviewsSection = (props) => {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ea voluptate reprehenderit voluptatum?"
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ea voluptate reprehenderit voluptatum? Dos ir itaqwe ads!"
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
};

const ReviewsStyled = styled.section`
  .reviews {
      display: flex;
  }
`;

export default ReviewsSection;
