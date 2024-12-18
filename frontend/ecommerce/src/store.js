import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productListReducers,
  productDetailsReducers,
} from "./reducers/productReducers"
import {
  userLoginReducer,
  userLogoutReducer,
  userSignupReducer,
} from "./reducers/userReducers"
import { cartReducer } from "./reducers/cartReducers"

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  userLogin: userLoginReducer,
  userLogout: userLogoutReducer,
  userSignup: userSignupReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const initialState = { cart: { cartItems: cartItemsFromStorage } }
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
