import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";

export interface Collateral {
  id: number;
  name: string;
  total: number;
  description: string;
}

interface collateralState {
  value: Collateral[];
}

let initialState: collateralState = {
  value: [
    { id: 0, name: "John", total: 20000, description: "car" },
    { id: 1, name: "Dan", total: 20000, description: "boat" },
    { id: 2, name: "Lisa",total: 20000, description: "truck" },
    { id: 3, name: "Tina", total: 20000, description: "black lotus" },
  ],
};

export const CollateralReducer =  createSlice({
  name: 'collateral',
  initialState,
  reducers: {
    addCollateral: (state, action) => {
     state.value = [...state.value, action.payload]
    }
  },
});

export const { addCollateral } = CollateralReducer.actions;
export const selectCollateral = (state: RootState) => state.collateral.value;
export default CollateralReducer.reducer;