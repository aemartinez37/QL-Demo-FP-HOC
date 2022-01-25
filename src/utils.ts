import { Country } from "./types";

export function isCountryObject(value: Country | Country[]): value is Country {
  return (value as Country).name !== undefined;
}

export function compose(...functions: Function[]): (comp: React.ComponentType) => Function {
  return (comp: React.ComponentType) => functions.reduceRight((acc, fn) => fn(acc), comp);
}
