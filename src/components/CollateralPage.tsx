import React from "react";
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
    return (<>
    <h1>Collateral</h1>
    {this.props.collateral.map((collateral: Collateral) => {
      return (
        <div key={"collateral" + collateral.id}>
          <p>{collateral.name}: {collateral.total}</p>
        </div>
      )
    })}
    </>)
  }
}

export default connect(mapStateToProps)(CollateralPage);
