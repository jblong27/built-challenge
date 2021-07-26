import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Grid Page</Nav.Link>
            <Nav.Link href="/collateral">Collateral</Nav.Link>
            <Nav.Link href="/loans">Loans</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
