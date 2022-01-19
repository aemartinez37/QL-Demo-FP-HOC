/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const EitherHOC =
  (conditionalRenderingFn: (props: any) => boolean, EitherComponent: React.FC) =>
  (Component: React.FC) =>
  (props: any) =>
    conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;
