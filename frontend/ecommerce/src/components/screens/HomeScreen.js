import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import axios from "axios"
import Product from "../Product"

function HomeScreen() {
  const [products, setProducts] = useState([])

  // get products
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/")
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <Container>
      <br />
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
