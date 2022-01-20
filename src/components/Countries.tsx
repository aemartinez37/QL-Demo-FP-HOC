import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Country, CustomQuery } from "../types";
import { StyledCountries, StyledCountry, StyledCountryImage, StyledCountryName } from "./styled/StyledComponents";
import { getCountries } from "../services/ApiCountries";
import { compose } from "recompose";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { EitherHOC } from "../functional-hocs/EitherHoc";
import { MaybeHOC } from "../functional-hocs/MaybeHoc";

/* Function Components */
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

const Countries = ({ ...props }) => {
  return (
    <StyledCountries>
      {props.data.map((country: Country) => (
        <CountryElem key={country.alpha3Code} {...country} />
      ))}
    </StyledCountries>
  );
};

/* Conditional Functions */
const isErrorFn = (props: CustomQuery) => props.isError;
const isLoadingFn = (props: CustomQuery) => props.isLoading;
const nothingContriesConditionFn = (props: CustomQuery) => !(props.data as Country[]);

/* Composing Functional HOCs */
const composeCountriesRendering = compose(
  EitherHOC(isErrorFn, Error),
  EitherHOC(isLoadingFn, Loading),
  MaybeHOC(nothingContriesConditionFn),
);

/* Composed Component */
const CountriesWithComposeRendering = composeCountriesRendering(Countries);

/* Composed Component Wrapper */
export const CountriesWrapper = () => {
  const queryResult = useQuery("countriesList", getCountries);
  return <CountriesWithComposeRendering {...queryResult} />;
};
