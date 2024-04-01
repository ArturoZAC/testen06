import React, { useState } from 'react'
import { postCartThunk, updateCartThunk} from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import "./styles/infoProduct.css"

const InfoProduct = ({productId}) => {

  const [quantity, setQuantity] = useState(1)
  const distpatch = useDispatch()
  const cart = useSelector(store => store.cart)

  // console.log(productId)

  const handleLess = () =>{
    if(quantity > 1){
      setQuantity(quantity-1)
    }
  }
  
  const handlePlus = () =>{
    if(quantity){
      setQuantity(quantity+1)
    }
  }

  const handleAddToCart = () =>{
      const item = cart.filter(prod => prod.productId===productId.id)
      if(item[0]){
        distpatch(updateCartThunk(...item, quantity))
      }else{
        distpatch(postCartThunk({
          quantity: quantity,
          productId: productId.id,
        }));
      }
    }

  return (
    <div className='infoprod'>
      <div className='texts'>
          <h2>{productId?.brand}</h2>
          <h3>{productId?.title}</h3>
          <p>{productId?.description}</p>
      </div>
      <div className='infoprod_uldiv'>
          <ul>
            <li className='colorprod'>Price</li>
            <li className='priceprod'>$ {productId?.price}</li>
          </ul>
          <div>
            <p className='colorprod'>Quantity</p>
            <div className='btnprin_infoprod'>
              <button className='btnclick_infoprod' onClick={handleLess}>-1</button>
              <span>{quantity}</span>
              <button className='btnclick_infoprod' onClick={handlePlus}>+1</button>
            </div>
          </div>
      </div>
      <button className='btn_infoprod' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default InfoProduct