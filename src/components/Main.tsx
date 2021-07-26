import React from "react";
import { Route } from "react-router-dom";
import { GridPage } from "./GridPage";
import LoansPage from "./LoansPage";
import CollateralPage from "./CollateralPage";


export const Main = () => {
  return (
    <>
      <Route exact path="/">
        <GridPage />
      </Route>
      <Route exact path="/loans">
        <LoansPage />
      </Route>
      <Route exact path="/collateral">
        <CollateralPage />
      </Route>
    </>
  );
};
