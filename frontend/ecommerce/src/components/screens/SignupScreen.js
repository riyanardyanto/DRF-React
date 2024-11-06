import React, { useState, useEffect } from "react"
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../Loader"
import Message from "../Message"
import { validPassword } from "./Regex"
import { signup } from "../../actions/userActions"

function SignupScreen() {
  const navigate = useNavigate()
  const [firstName, setFitstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [show, changeshow] = useState("fa fa-eye-slash")
  const dispatch = useDispatch()
  const location = useLocation()
  const redirect = location.search ? location.search.split("=")[1] : "/"

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  const userSignup = useSelector((state) => state.userSignup)
  const { error, loading, userInfo } = userSignup

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
      navigate("/signup")
    } else if (!validPassword) {
      setMessage("Password criteria not met")
      navigate("/signup")
    } else {
      dispatch(signup(firstName, lastName, email, password))
      setMessage("Sign Up Successful")
      navigate("/login")
    }
  }

  const showPassword = () => {
    var x = document.getElementById("password")
    var y = document.getElementById("confirmPassword")
    if (x.type === "password" && y.type === "password") {
      x.type = "text"
      y.type = "text"
      changeshow("fa fa-eye")
    } else {
      x.type = "password"
      y.type = "password"
      changeshow("fa fa-eye-slash")
    }
  }

  return (
    <>
      <Container className="my-3">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h3" className="text-center text-light bg-dark">
                Sign Up
              </Card.Header>
              <Card.Body>
                {message && <Message variant="danger">{message}</Message>}
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="first_name" className="my-3">
                    <Form.Label>
                      <span>
                        <i class="fa-solid fa-user"></i>
                      </span>
                      <b> First Name</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      id="first_name"
                      value={firstName}
                      onChange={(e) => setFitstName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="last_name" className="my-3">
                    <Form.Label>
                      <span>
                        <i class="fa-solid fa-user"></i>
                      </span>
                      <b> Last Name</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      id="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email" className="my-3">
                    <Form.Label>
                      <span>
                        <i class="fa-solid fa-envelope"></i>
                      </span>{" "}
                      <b>Email address</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="my-3">
                    <Form.Label>
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>{" "}
                      <b>Password</b>
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <InputGroup.Text onClick={showPassword}>
                        <span>
                          <i class={show}></i>
                        </span>
                      </InputGroup.Text>
                    </InputGroup>

                    <small>
                      Password must be at least [0-9][a-z][A-Z][!@#$%^&*]
                    </small>
                  </Form.Group>
                  <Form.Group className="my-3">
                    <Form.Label>
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>{" "}
                      <b>Confirm Password</b>
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <InputGroup.Text onClick={showPassword}>
                        <span>
                          <i class={show}></i>
                        </span>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" className="mt-3">
                      Sign Up
                    </Button>
                  </div>
                </Form>

                <Row className="py-3">
                  <Col>
                    <small>
                      Already have an account? <Link to="/login">Login</Link>
                    </small>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  )
}

export default SignupScreen
