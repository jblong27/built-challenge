import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

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
    { id: 2, total: 40000, project: "Construction." },
    { id: 3, total: 50000, project: "Festival." },
    { id: 4, total: 55000, project: "New car." },
    { id: 5, total: 60000, project: "Misc." },
  ],
};
//createSlice takes name, initialState and reducers as params
export const BudgetReducer = createSlice({
  name: "budgets",
  initialState,
  //could also probably do a switch case here
  reducers: {
    addBudget: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteBudget: (state, action) => {
    //   // return state.value.filter((state) => state.value !== action.payload)
    //   // delete state.value.
    // }
    },
    editBudget: (state, action) => {
      if (action.payload !== '') {
        const newArray = [...state.value];
        newArray.push(action.payload);
        return { ...state, value: newArray }
        }
      }
    },
});

export const { addBudget, deleteBudget, editBudget } = BudgetReducer.actions;
export const selectBudget = (state: RootState) => state.budgets.value;
export default BudgetReducer.reducer;
