import React from "react";
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
    return (<>
    <h1>Loans</h1>
    {this.props.loans.map((loans: Loan) => {
      return (
        <div key={"loans" + loans.id}>
          <h5>{loans.lender}: </h5>
          <p>Current interest rate: {loans.interest}</p>
        </div>
      )
    })}
    </>)
  }
}

export default connect(mapStateToProps)(LoansPage);
