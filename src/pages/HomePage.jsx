import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import ProductCard from '../components/homePage/ProductCard'
import "./styles/homePage.css"
import SelectCategory from '../components/homePage/SelectCategory'
import FormPrice from '../components/homePage/FormPrice'
const body = document.querySelector("body")

const HomePage = () => {

  const [formValue, setFormValue] = useState({
    from: 0,
    to: Infinity,
  })
  const [selectValue, setSelectValue] = useState(0)
  const [productName, setProductName] = useState("")
  const products = useSelector(store => store.products)
  const dispatch = useDispatch()

  // console.log(products)

  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
    dispatch(getProductsThunk(url));
  }, [])
  
  const textinput = useRef()

  const handleSearch = () =>{
    setProductName(textinput.current.value.toLowerCase().trim())
  }

  // console.log(products)

  const cbfilter = (prod) =>{
    const {from, to} = formValue;
    const ByName = prod.title.toLowerCase().includes(productName)
    const ByCategory = +selectValue === 0 ? true : prod.categoryId === + selectValue;
    const ByPrice = +prod.price > +from && +prod.price <= +to;
    return ByName && ByCategory && ByPrice;
  }

  // console.log(selectValue)
  console.log(formValue)

  const handleDark = () =>{
    body.classList.toggle("dark")
  }

  //<button onClick={handleDark}>Dark Mode</button>

  return (
    <div className='global'>
        <div className='filtersContainer'>
          <FormPrice 
            setFormValue={setFormValue}
          />
            <SelectCategory 
              setSelectValue={setSelectValue}
            />
        </div>
        <section className='productsContainer'>
          <div className='prubdiv'>
            <h3>Find your favorite Object</h3>
            <input className='int' placeholder='What are you looking for?' type="text" ref={textinput} onChange={handleSearch}/>
          </div>
          <div className='products'>
          {
            products?.filter(cbfilter).map((prod) => (
              <ProductCard 
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>

        </section>
    </div>
  )
}

export default HomePage