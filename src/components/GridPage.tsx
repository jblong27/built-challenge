import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { ValueGetterParams, ValueSetterParams } from "ag-grid-community";
import {
  RowNode,
  RowNodeEvent,
} from "ag-grid-community/dist/lib/entities/rowNode";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark";
import {
  addBudget,
  deleteBudget,
  selectBudget /* edit budget? */,
} from "../reducers/BudgetReducer";

export const GridPage = () => {
  const budgets = useSelector(selectBudget);
  const dispatch = useDispatch();
  const [newBudget, setNewBudget] = useState({});
  const [rowData, setRowData] = useState([...budgets]);

  useEffect(() => {
    setRowData(budgets)
  }, [budgets])

  const handleGridUpdate = (evt: any) => {
    const stateUpdate: { [index: string]: { message: any } } = Object.assign({}, newBudget)
    stateUpdate[evt.target.name]
  }
  return (
    <> 
      <button onClick={() => dispatch(addBudget(newBudget))}></button>
    

    </>
  )
};
