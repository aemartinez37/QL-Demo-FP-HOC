import React from "react";
import { StyledError, StyledErrorMessage } from "./styled/StyledComponents";

export const Error = () => {
  return (
    <>
      <StyledError>
        <img src="/assets/somethingWentWrong.png" alt="Error!" />
        <img src="/assets/sheldon-worried.png" alt="Error!" />
      </StyledError>
      <StyledErrorMessage>Something went wrong!</StyledErrorMessage>
    </>
  );
};
