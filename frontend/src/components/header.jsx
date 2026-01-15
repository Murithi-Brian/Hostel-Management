import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./searchBox";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <header>
      <Navbar expand="lg" variant="dark" collapseOnSelect className="navbar-custom shadow-sm">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-bold">
               Hostel Management
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav className="ms-auto align-items-center">
              <NavDropdown title="Dashboard" className="me-2">
                <LinkContainer to="/attendance">
                  <NavDropdown.Item>📋 Attendance</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/addStudent">
                  <NavDropdown.Item>➕ Add Student</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/analysis">
                  <NavDropdown.Item>📊 Analysis</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {userInfo ? (
                <NavDropdown title={`👤 ${userInfo.name}`} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>

                  {userInfo.isAdmin && (
                    <LinkContainer to="/userList">
                      <NavDropdown.Item>Manage Users</NavDropdown.Item>
                    </LinkContainer>
                  )}

                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={logoutHandler}>
                    🚪 Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>🔐 Sign In</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
