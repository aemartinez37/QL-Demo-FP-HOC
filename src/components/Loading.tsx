import React from "react";
import { StyledLoading } from "./styled/StyledComponents";

export const Loading = () => {
  return (
    <StyledLoading>
      <img src="/assets/loading.gif" alt="Loading..." />
    </StyledLoading>
  );
};
