import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCollateral,
  selectCollateral,
  Collateral,
} from "../reducers/CollateralReducer";
import { Button, Form } from "react-bootstrap";

export const CollateralPage = () => {

    const collaterals = useSelector(selectCollateral);
    const dispatch = useDispatch();
    const [newCollateral, setNewCollateral] = useState({});
    const [divData, setDivData] = useState([...collaterals])

    useEffect(() => {
      setDivData(collaterals);
    }, [collaterals])
    
    // interface Props {
    //   collateral: Collateral[];
    // }
    const handlePageUpdate = (evt: any) => {
      const stateUpdate: { [index: string]: { message: any } } = Object.assign(
        {},
        newCollateral
      );
      stateUpdate[evt.target.name] = evt.target.value;
      console.log(stateUpdate)
      setNewCollateral(stateUpdate);
    };


    return (
      <>
        <h1>Collateral</h1>
        <Form.Group className="d-flex p-3">
          {/* <Form.Control
          type="text"
          name="id"
          placeholder="id"
          onChange={}
        /> */}
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name Here"
            onChange={handlePageUpdate}
          />
          <Form.Control
            type="text"
            name="item"
            placeholder="Collateral Item"
            onChange={handlePageUpdate}
          />
          <Form.Control
            type="text"
            name="value"
            placeholder="Value of Item"
            onChange={handlePageUpdate}
          />
          <Button
            className="ml-5"
            variant="success"
            onClick={() => dispatch(addCollateral(newCollateral))}
          >
            Submit
          </Button>
        </Form.Group>
      </>
    );
}
