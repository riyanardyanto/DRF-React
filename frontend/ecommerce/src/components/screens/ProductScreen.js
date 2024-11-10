import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Form,
} from "react-bootstrap"
import Rating from "../Rating"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../../actions/productActions"
import Loader from "../Loader"
import Message from "../Message"
import { addToCart } from "../../actions/cartActions"

function ProductScreen({ params, match, history }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, params])

  const addToCartHandler = () => {
    // dispatch(addToCart(id, qty))
    navigate(`/cart/${id}?qty=${qty}`)
  }

  // const [product, setProduct] = useState([])

  // useEffect(() => {
  //   async function fetchProduct() {
  //     const { data } = await axios.get(`/api/product/${id}`)

  //     setProduct(data)
  //   }

  //   fetchProduct()
  // }, [])

  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              <Card>
                <Image src={product.image} alt={product.name} fluid />
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.product_name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.num_reviews} reviews`}
                      color={"#f8e825"}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Brand: {product.product_brand}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.product_info}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>Rp. {product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.stock_count > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.stock_count > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col xs="auto" className="my-1">
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.stock_count).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className="btn-block btn-success"
                      type="button"
                      disabled={product.stock_count === 0}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  )
}

export default ProductScreen
