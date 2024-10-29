import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import axios from "axios"
import Product from "../Product"
import { listProducts } from "../../actions/productActions"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../Loader"
import Message from "../Message"

function HomeScreen() {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  // const [products, setProducts] = useState([])

  // // get products
  // useEffect(() => {
  //   async function fetchProducts() {
  //     const { data } = await axios.get("/api/products/")
  //     setProducts(data)
  //   }

  //   fetchProducts()
  // }, [])

  return (
    <Container>
      <br />
      <h1>Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default HomeScreen
