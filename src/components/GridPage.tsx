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
  selectBudget,
  editBudget,
} from "../reducers/BudgetReducer";

export const GridPage = () => {
  const budgets = useSelector(selectBudget);
  const dispatch = useDispatch();
  //useState for adding new budgets to the grid
  const [newBudget, setNewBudget] = useState({});
  const [rowData, setRowData] = useState([...budgets]);

  useEffect(() => {
    setRowData(budgets);
  }, [budgets]);

  //valueSetter to allow editing on the grid
  const valueSetter = (params: ValueSetterParams) => {
    let paramsObj = {
      data: params.data,
      colId: params.column.getColId(),
      newValue: params.newValue,
      rowIndex: params.node?.rowIndex,
    };
    dispatch(editBudget(paramsObj));
  };

  //https://www.ag-grid.com/javascript-grid/value-getters/
  //just getting the value of the column ID
  const valueGetter = (params: ValueGetterParams) => {
    return params.data[params.column.getColId()];
  };

  const handleGridUpdate = (evt: any) => {
    const stateUpdate: { [index: string]: { message: any } } = Object.assign(
      {},
      newBudget
    );
    stateUpdate[evt.target.name] = evt.target.value;
    setNewBudget(stateUpdate);
  };
  return (
    <>
    {/* button and input to add new budget to grid */}
      <button onClick={() => dispatch(addBudget(newBudget))}></button>
      <input
        type="text"
        name="id"
        placeholder="id"
        onChange={handleGridUpdate}
      />
      <input
        type="text"
        name="total"
        placeholder="total"
        onChange={handleGridUpdate}
      />
      <input
        type="text"
        name="project"
        placeholder="project"
        onChange={handleGridUpdate}
      />

      <div className="ag-theme-balham-dark" style={{ height: 600, width: 500 }}>
        <AgGridReact
          immutableData={true}
          rowData={rowData}
          getRowNodeId={(data) => data.id}
        >
          <AgGridColumn field="id"></AgGridColumn>
          <AgGridColumn field="total"></AgGridColumn>
          <AgGridColumn
            valueGetter={(e) => valueGetter(e)}
            field="project"
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </>
  );
};
