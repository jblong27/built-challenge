import React, { Component } from "react";
import { Collateral } from "../reducers/CollateralReducer";
import { RootState } from "../app/store";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => {
  return { collateral: state.collateral.value };
};

interface Props {
  collateral: Collateral[];
}
class CollateralPage extends React.Component<Props> {
  render() {
    return (
      <>
        <h1>Collateral</h1>
      </>
    );
  }
}

export default connect(mapStateToProps)(CollateralPage);
