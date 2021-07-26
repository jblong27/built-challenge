import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";

export interface Loan {
  id: number;
  lender: string;
  interest: number;
}

interface loanState {
  value: Loan[];
}

let initialState: loanState = {
  value: [
    { id: 0, lender: "Check Into Cash", interest: 0.05 },
    { id: 1, lender: "Speedy Cash", interest: 0.03 },
    { id: 2, lender: "Cashville", interest: 0.02 },
    { id: 3, lender: "Advance Financial", interest: 0.07 },
  ],
};
export const LoansReducer = createSlice({
  name: 'loans',
  initialState,
  reducers: {
    addLoan: (state, action) => {
      state.value = [...state.value, action.payload]
    }
  }
});

export const { addLoan } = LoansReducer.actions;
export const selectLoans = (state: RootState) => state.loans.value;
export default LoansReducer.reducer;
