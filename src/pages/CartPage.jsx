import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from '../components/cartPage/CartProduct'
import useAuth from "../hooks/useAuth"
import getToken from '../utils/getToken'
import "./styles/cartPage.css"

const CartPage = () => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const createBuy = useAuth()


  useEffect(() => {
    dispatch(getCartThunk())
  }, [])
  
  // console.log(cart)

  const handleTotals = () => {
    return cart.reduce((ac, cv) => {
      if (cv.product) { // Verifica si cv.product está definido
        return ac + (cv.quantity * cv.product.price);
      } else {
        return ac;
      }
    }, 0);
  };
  const handleBuy = () =>{
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    createBuy(url, "" , getToken())
    dispatch(setCart([]))
  }


  return (
    <div className='cart_container'>
      <div className='fond_cart'>
        {
          cart?.map(prod => (
            <CartProduct 
              key = {prod.id}
              prod={prod}
            />
          ))
        }
        <div className='btnh3_cart'>
          <h3>Total buy: <span>${handleTotals()}</span></h3>
          <button onClick={handleBuy}>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage