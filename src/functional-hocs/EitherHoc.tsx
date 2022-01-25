import React from "react";

export function EitherHOC<T extends object>(
  conditionalRenderingFn: (props: T) => boolean,
  EitherComponent: React.ComponentType<T>,
) {
  return (Component: React.ComponentType<T>) => (props: T) =>
    conditionalRenderingFn(props) ? <EitherComponent {...props} /> : <Component {...props} />;
}
