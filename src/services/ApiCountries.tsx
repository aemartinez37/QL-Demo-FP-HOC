import { REST_COUNTRIES_API } from "../constants";
import axios from "axios";
import { Country } from "../types";

export const getCountries = async () => {
  const { data } = await axios.get(`${REST_COUNTRIES_API}/all`);
  return data as Country[];
};

export const getCountry = async (alpha3Code: string) => {
  const { data } = await axios.get(`${REST_COUNTRIES_API}/alpha/${alpha3Code}`);
  return data as Country;
};
