import React from "react";

export function MaybeHOC<T extends object>(conditionalRenderingFn: (props: T) => boolean) {
  return (Component: React.ComponentType<T>) => (props: T) =>
    conditionalRenderingFn(props) ? <Component {...props} /> : <h1>Nothing!</h1>;
}
