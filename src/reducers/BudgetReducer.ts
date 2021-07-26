import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";

export interface Budget {
  id: number;
  total: number;
  project: string;
}

interface budgetState {
  value: Budget[];
}

let initialState: budgetState = {
  value: [
    { id: 0, total: 10000, project: "Highschool reunion" },
    { id: 1, total: 35000, project: "Art installation" },
  ],
};
//createSlice takes name, initialState and reducers as params
export const BudgetSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteBudget: (state, action) => {
      return {
        ...state,
        value: state.value.filter(
          (value, index) => index !== action.payload
        ),
    // editBudget : (state, action) => {

    // }
      };
    }
  },
});

export const { addBudget, deleteBudget } = BudgetSlice.actions;
export const selectBudget = (state: RootState) => state.budgets.value;
export default BudgetSlice.reducer; 