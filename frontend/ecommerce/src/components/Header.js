import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userActions"

function Header() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>E-commerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fa-solid fa-house"></i> <span>Home</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i class="fa-solid fa-cart-shopping"></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="navbarScrollingDropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="New User?" id="navbarScrollingDropdown">
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fa-solid fa-right-to-bracket"></i>{" "}
                      <span>Login</span>
                    </Nav.Link>
                  </LinkContainer>{" "}
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      <i className="fa-solid fa-user-plus"></i>{" "}
                      <span>Signup</span>
                    </Nav.Link>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">My E-commerce</Nav.Link>
          </LinkContainer>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="nav-link active">Home</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-link">Cart</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item dropdown">
                <Nav.Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  New User?
                </Nav.Link>
                <div className="dropdown-menu">
                  <LinkContainer to="/login">
                    <Nav.Link className="dropdown-item">Login</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link className="dropdown-item">Signup</Nav.Link>
                  </LinkContainer>

                  <div className="dropdown-divider"></div>

                  <LinkContainer to="/logout">
                    <Nav.Link className="dropdown-item">Logout</Nav.Link>
                  </LinkContainer>
                </div>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </Navbar> */}
    </>
  )
}

export default Header
