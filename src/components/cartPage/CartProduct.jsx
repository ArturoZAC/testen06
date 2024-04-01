import React from 'react'
import "./styles/cartProduct.css"
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartProduct = ({prod}) => {

  // console.log(prod)
  const dispatch = useDispatch()

  const handleLess = () => {
    if(prod.quantity > 1){
      dispatch(updateCartThunk(prod, -1))
    }
  }

  const handlePlus = () =>{
    dispatch(updateCartThunk(prod, 1))
  }




  const handleRemove = () =>{
    dispatch(deleteCartThunk(prod.id))
  }

  // console.log(prod)

  return (
      prod.product &&(
        <div className='cartProduct'>
          <div>
            <h2>{prod.product.title}</h2>
            <figure className='cart_fig'>
              <img src={prod.product.images[0].url} alt="productimg" />
            </figure>
            <div className='cart_genn'>
              <div className='cart_btns'>
                <button onClick={handleLess}>-</button>
                <span>{prod.quantity}</span>
                <button onClick={handlePlus}>+</button>
              </div>
              <button className='cart_btnsdel' onClick={handleRemove}>Delete</button>
            </div>
            <h3>Total Product: $ {prod.product.price * prod.quantity}</h3>
          </div>
        </div>
      )
  )
}

export default CartProduct