/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const MaybeHOC = (conditionalRenderingFn: (props: any) => boolean) => (Component: React.FC) => (props: any) =>
  conditionalRenderingFn(props) ? null : <Component {...props} />;
