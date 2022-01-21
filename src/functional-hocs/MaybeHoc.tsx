import React from "react";

export const MaybeHOC = (conditionalRenderingFn: (props: any) => boolean) => (Component: React.FC) => (props: any) =>
  conditionalRenderingFn(props) ? <h1>Nothing!</h1> : <Component {...props} />;
