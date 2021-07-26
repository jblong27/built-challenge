import React, { Component } from "react";
import { Loan } from "../reducers/LoansReducer";
import { RootState } from "../app/store";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => {
  return { loans: state.loans.value };
};

interface Props {
  loans: Loan[];
}
class LoansPage extends React.Component<Props> {
  render() {
    return (
      <>
        <h1>Loans</h1>
      </>
    );
  }
}

export default connect(mapStateToProps)(LoansPage);
