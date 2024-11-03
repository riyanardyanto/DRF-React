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

function LoginScreen() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [show, changeshow] = useState("fa fa-eye-slash")

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      navigate("/signup")
    } else if (!validPassword) {
      setError("Invalid Email")
      navigate("/signup")
    } else {
      setError("Sign Up Successful")
      navigate("/login")
    }
  }

  const showPassword = () => {
    var x = document.getElementById("password")
    if (x.type === "password") {
      x.type = "text"
      changeshow("fa fa-eye")
    } else {
      x.type = "password"
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
                Login
              </Card.Header>
              <Card.Body>
                {error && <Message variant="danger">{error}</Message>}
                <Form onSubmit={submitHandler}>
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
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" className="mt-3">
                      Login
                    </Button>
                  </div>
                </Form>

                <Row className="py-3">
                  <Col>
                    <small>
                      Don't have an account? <Link to="/signup">Sign Up</Link>
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

export default LoginScreen
