import { REST_COUNTRIES_API } from "../constants";
import axios from "axios";
import { Country } from "../types";

export const getCountries = async () => {
  const { data } = await axios.get<Country[]>(`${REST_COUNTRIES_API}/all`);
  return data;
};

export const getCountry = async (alpha3Code: string) => {
  const { data } = await axios.get<Country>(`${REST_COUNTRIES_API}/alpha/${alpha3Code}`);
  return data;
};
