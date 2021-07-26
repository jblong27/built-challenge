import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import BudgetReducer from '../reducers/BudgetReducer';
import CollateralReducer from '../reducers/CollateralReducer';
import LoansReducer from '../reducers/LoansReducer';

export const store = configureStore({
  reducer: {
    budgets: BudgetReducer,
    collateral: CollateralReducer,
    loans: LoansReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
