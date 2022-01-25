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
import { Error } from "./Error";
import { Loading } from "./Loading";

export const CountryInfo = () => {
  const { countryAlpha3Code = "" } = useParams<{ countryAlpha3Code: string }>();
  const { isLoading, isError, data } = useQuery(["countryInfo", countryAlpha3Code], () =>
    getCountry(countryAlpha3Code),
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (data) {
    return (
      <StyledCountryInfo>
        <StyledCountry id={data.alpha3Code.toString()}>
          <StyledCountryImage src={data.flags.png} alt={`${data.name} flag`} />
          <StyledCountryName>{data.name}</StyledCountryName>
          <StyledCountryInfoTable>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>Subregion:</td>
                <td>{data.subregion}</td>
              </tr>
              <tr>
                <td>Borders:</td>
                <td>
                  {(data.borders &&
                    data.borders.map((border: string) => {
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
  }

  return null;
};
