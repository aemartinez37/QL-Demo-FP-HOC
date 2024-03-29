import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import {
  StyledCountry,
  StyledCountryImage,
  StyledCountryInfo,
  StyledCountryInfoTable,
  StyledCountryName,
} from "./styled/StyledComponents";
import { getCountry } from "../services/ApiCountries";
import { CustomQuery } from "../types";
import { EitherHOC } from "../functional-hocs/EitherHoc";
import { MaybeHOC } from "../functional-hocs/MaybeHoc";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { compose, isCountryObject } from "../utils";

/* Function Component */
const CountryInfo = ({ ...props }) => {
  return (
    <StyledCountryInfo>
      <StyledCountry id={props.data.alpha3Code.toString()}>
        <StyledCountryImage src={props.data.flags.png} alt={`${props.data.name} flag`} />
        <StyledCountryName>{props.data.name}</StyledCountryName>
        <StyledCountryInfoTable>
          <tbody>
            <tr>
              <td>Capital:</td>
              <td>{props.data.capital}</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>{props.data.region}</td>
            </tr>
            <tr>
              <td>Subregion:</td>
              <td>{props.data.subregion}</td>
            </tr>
            <tr>
              <td>Borders:</td>
              <td>
                {(props.data.borders &&
                  props.data.borders.map((border: string) => {
                    return <Link key={`${border}`} to={`/${border}`}>{`${border}`}</Link>;
                  })) ||
                  "-"}
              </td>
            </tr>
          </tbody>
        </StyledCountryInfoTable>
      </StyledCountry>
    </StyledCountryInfo>
  );
};

/* Conditional Functions */
const isErrorFn = (props: CustomQuery) => props.isError;
const isLoadingFn = (props: CustomQuery) => props.isLoading;
const justCountryInfoConditionFn = (props: CustomQuery) => isCountryObject(props.data);

/* Composing Functional HOCs */
const composeCountryInfoRendering = compose(
  EitherHOC(isErrorFn, Error),
  EitherHOC(isLoadingFn, Loading),
  MaybeHOC(justCountryInfoConditionFn),
);

/* Composed Component */
const CountryInfoWithComposeRendering = composeCountryInfoRendering(CountryInfo);

/* Composed Component Wrapper */
export const CountryInfoWrapper = () => {
  const { countryAlpha3Code = "" } = useParams<{ countryAlpha3Code: string }>();
  const queryResult = useQuery(["countryInfo", countryAlpha3Code], () => getCountry(countryAlpha3Code));
  return <CountryInfoWithComposeRendering {...queryResult} />;
};
