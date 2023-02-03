import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../state";

function Navbarreact() {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">Add Student</Nav.Link>
            <Nav.Link href="/">Manage Student</Nav.Link>
            <Nav.Link href="/login" onClick={()=>{dispatch(setLogin({ islogin: false }));}}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </div>
  )
}

export default Navbarreact