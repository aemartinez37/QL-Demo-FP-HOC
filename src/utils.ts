import { Country } from "./types";

/* Type Guards - Duck Typing*/
export function isCountryObject(value: Country | Country[]): value is Country {
  return (value as Country).name !== undefined;
}

export function isCountryArray(value: Country | Country[]): value is Country[] {
  return (value as Country[]).length !== undefined;
}

/* Compose Function */
export function compose(...functions: Function[]): (comp: React.ComponentType) => Function {
  return (comp: React.ComponentType) => functions.reduceRight((acc, fn) => fn(acc), comp);
}
