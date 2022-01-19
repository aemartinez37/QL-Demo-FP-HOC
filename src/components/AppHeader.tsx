import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledHeaderMainImage,
  StyledHeaderGifImageL,
  StyledHeaderGifImageR,
} from "./styled/StyledComponents";

export const AppHeader: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderGifImageL src="/assets/race-flag-6.gif" alt="Flag Gif L" />
      <Link to={"/"}>
        <StyledHeaderMainImage src="/assets/funWithFlags.png" alt="Header Logo" />
      </Link>
      <StyledHeaderGifImageR src="/assets/race-flag-6.gif" alt="Flag Gif R" />
    </StyledHeader>
  );
};
