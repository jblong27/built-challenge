import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { ValueGetterParams, ValueSetterParams } from "ag-grid-community";
import { Button, Form } from "react-bootstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {
  addBudget,
  deleteBudget,
  selectBudget,
  editBudget,
} from "../reducers/BudgetReducer";

export const GridPage = () => {
  const budgets = useSelector(selectBudget);
  //
  const dispatch = useDispatch();
  //useState for adding new budgets to the grid
  const [newBudget, setNewBudget] = useState({});
  const [rowData, setRowData] = useState([...budgets]);

  useEffect(() => {
    setRowData(budgets);
  }, [budgets]);

  const handleGridUpdate = (evt: any) => {
    const stateUpdate: { [index: string]: { message: any } } = Object.assign(
      {},
      newBudget
    );
    stateUpdate[evt.target.name] = evt.target.value;
    setNewBudget(stateUpdate);
  };
  //https://www.ag-grid.com/javascript-grid/value-getters/
  //just getting the value of the row by column ID
  const valGet = (params: ValueGetterParams) => {
    return params.data[params.column.getColId()];
  };
  //valueSetter to allow editing on the grid
  const valSet = (params: ValueSetterParams) => {
    let params_obj = {
      data: params.data,
      colId: params.column.getColId(),
      new_value: params.newValue,
      row_index: params.node?.rowIndex,
    };
    dispatch(editBudget(params_obj));
    console.log(params_obj);
    return true;
  };

  return (
    <>
      {/* button and input to add new budget to grid, dispatch is used to update the store */}
      <h2 style={{ textAlign: "center" }}>Budgets</h2>
      <Form.Group className="d-flex p-3">
        <Form.Control
          type="text"
          name="id"
          placeholder="id"
          onChange={handleGridUpdate}
        />
        <Form.Control
          type="text"
          name="total"
          placeholder="total"
          onChange={handleGridUpdate}
        />
        <Form.Control
          type="text"
          name="project"
          placeholder="project"
          onChange={handleGridUpdate}
        />
        <Button
          className="ml-5"
          variant="success"
          onClick={() => dispatch(addBudget(newBudget))}
        >
          Insert
        </Button>
      </Form.Group>
      <div
        className="ag-theme-balham "
        style={{ width: 800, margin: "auto", overflow: "hidden" }}
      >
        <AgGridReact
          // display={{ align-items: center }}
          domLayout="autoHeight"
          immutableData={true}
          rowData={rowData}
          getRowNodeId={(data) => data.id}
        >
          <AgGridColumn field="id"></AgGridColumn>
          <AgGridColumn
            valueGetter={(e) => valGet(e)}
            valueSetter={(e) => valSet(e)}
            editable={true}
            field="total"
          ></AgGridColumn>
          <AgGridColumn
            valueGetter={(e) => valGet(e)}
            valueSetter={(e) => valSet(e)}
            editable={true}
            field="project"
          ></AgGridColumn>
          <AgGridColumn></AgGridColumn>
        </AgGridReact>
      </div>
    </>
  );
};
