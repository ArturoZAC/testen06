import React, { useEffect, useRef } from 'react'
import useFetch from "../../hooks/useFecth"
import "./styles/selectedCategory.css"

const SelectCategory = ({setSelectValue}) => {

    const [categorias, getCategorias] = useFetch()

    
    useEffect(() => {
        const url ="https://e-commerce-api-v2.academlo.tech/api/v1/categories"
        getCategorias(url)
    }, [])


    // console.log(categorias)
    
    const textSelect = useRef()

    const handleCategory = () =>{
        setSelectValue(textSelect.current.value)
    }

  return (
    <div className="category-container">
        <h3 className='categoryh3'>By Category</h3>
        <select className='select' onChange={handleCategory} ref={textSelect}>
            <option value={0}>all</option>
            {
                categorias?.map(categoria => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.name}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectCategory