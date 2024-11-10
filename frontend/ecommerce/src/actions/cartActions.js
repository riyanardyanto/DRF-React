import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      product_name: data.product_name,
      image: data.image,
      price: data.price,
      stock_count: data.stock_count,
      qty,
    },
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
