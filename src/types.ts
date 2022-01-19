export type Country = {
  name: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  borders: string[];
  flags: { svg: string; png: string };
};

export type CustomQuery = {
  isLoading: boolean;
  isError: boolean;
  data: Country | Country[];
};
