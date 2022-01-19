import styled from "styled-components";

export const StyledHeader = styled.div`
  text-align: center;
`;

export const StyledHeaderMainImage = styled.img`
  padding: 0 50px;
  max-height: 110px;
`;

export const StyledHeaderGifImageL = styled.img`
  max-height: 140px;
`;

export const StyledHeaderGifImageR = styled.img`
  max-height: 140px;
  transform: scaleX(-1);
`;

export const StyledCountry = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const StyledCountryImage = styled.img`
  border-radius: 9999px;
  height: 100px;
  width: 100px;
  object-fit: contain;
`;

export const StyledCountryName = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const StyledCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  padding: 16px;
`;

export const StyledFlag = styled.img`
  width: 40px;
`;

export const StyledCountryInfo = styled.div`
  padding: 16px;

  ${StyledCountryImage} {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: unset;
    height: auto;
    width: 350px;
  }

  ${StyledCountry} {
    padding: 25px;
  }

  ${StyledCountryName} {
    font-size: 32px;
  }
`;

export const StyledCountryInfoTable = styled.table`
  min-width: 350px;
  border-collapse: collapse;
  font-size: 22px;

  td {
    padding: 5px 10px;

    :first-child {
      font-weight: bold;
    }

    a {
      margin: 0 7px;
    }
  }

  tbody tr {
    background-color: #efefef;

    :nth-of-type(odd) {
      background-color: #c1c1c1;
    }
  }
`;

export const StyledLoading = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding-top: 50px;

  img {
    max-height: 500px;
    margin: 0 80px;
  }
`;

export const StyledErrorMessage = styled.h1`
  text-align: center;
  color: red;
  font-size: 50px;
  font-family: monospace;
`;
