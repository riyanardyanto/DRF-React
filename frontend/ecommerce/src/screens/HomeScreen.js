import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import axios from "axios"

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
            <Card>
              <Card.Img variant="top" src={product.image} />
            </Card>
            <h3>{product.product_name}</h3>
            <h5>{product.product_info}</h5>
            <p>${product.price}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
