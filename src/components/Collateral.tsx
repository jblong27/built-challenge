import React, { Component } from 'react';
import { Collateral } from '../reducers/CollateralReducer';
import { RootState } from '../app/store';


interface Props {
  collateral: Collateral[],
}
export class Collateral extends React.Component<Props>{

  render() {

    return (
      <> 

        <h1>Collateral</h1>

      </>
    )
  }

}