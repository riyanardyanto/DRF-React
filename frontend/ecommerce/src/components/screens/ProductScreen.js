import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap"
import Rating from "../Rating"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../../actions/productActions"
import Loader from "../Loader"
import Message from "../Message"

function ProductScreen({ params }) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, params])

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
              <Image src={product.image} alt={product.name} fluid />
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
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
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
