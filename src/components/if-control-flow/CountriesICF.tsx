import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Country } from "../../types";
import { StyledCountries, StyledCountry, StyledCountryImage, StyledCountryName } from "../styled/StyledComponents";
import { getCountries } from "../../services/ApiCountries";
import { Loading } from "../Loading";
import { Error } from "../Error";

const CountryElem = ({ name, alpha3Code, flags }: Country) => {
  return (
    <Link to={`/${alpha3Code}`}>
      <StyledCountry id={alpha3Code.toString()}>
        <StyledCountryImage src={flags.png} alt={`${name} flag`} />
        <StyledCountryName>{name}</StyledCountryName>
      </StyledCountry>
    </Link>
  );
};

export const Countries = () => {
  const { isLoading, isError, data } = useQuery("countriesList", getCountries);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if ((data as Country[]).length > 0) {
    return (
      <StyledCountries>
        {(data as Country[]).map((country: Country) => (
          <CountryElem key={country.alpha3Code} {...country} />
        ))}
      </StyledCountries>
    );
  }

  return null;
};
