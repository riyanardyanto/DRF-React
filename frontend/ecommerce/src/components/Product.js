import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Rating
          value={product.rating}
          text={`${product.num_reviews} reviews`}
          color={"#f8e825"}
        />
        <Card.Text>Rp. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
