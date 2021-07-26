import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Collateral {
  id: number;
  name: string;
  item: string;
  value: number;
}

interface collateralState {
  value: Collateral[];
}

let initialState: collateralState = {
  value: [
    { id: 0, name: "John", item: "car", value: 20000 },
    { id: 1, name: "Dan", item: "boat", value: 20000 },
    { id: 2, name: "Lisa", item: "truck", value: 20000 },
    { id: 3, name: "Tina", item: "black lotus", value: 20000 },
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