import React from "react";
import { Route } from "react-router-dom";
import { GridPage } from "./GridPage";
import { Loans } from "./Loans";
import { Collateral } from "./Collateral";

export const Main = () => {
  return (
    <>
      <Route exact path="/">
        <GridPage />
      </Route>
      <Route exact path="/loans">
        <Loans />
      </Route>
      <Route exact path="/collateral">
        <Collateral />
      </Route>
    </>
  );
};
