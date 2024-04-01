import React from 'react'
import { useForm } from 'react-hook-form'
import "./styles/formPrice.css"

const FormPrice = ({setFormValue}) => {

    const { handleSubmit, register, reset} = useForm();

    const submit = (data) =>{
        setFormValue({
            from: data.from || 0,
            to: data.to || Infinity
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <h3 className='priceh3'>Price:</h3>
            <div className='divform'>
                <label className='labb' htmlFor="from">From</label>
                <input {...register("from")} id='from' type="number" />
            </div>
            <div className='divform'>
                <label className='labb' htmlFor="to">To</label>
                <input {...register("to")} id='to' type="number" />
            </div>
            <button className='btn__filter'>Filter Price</button>
        </form>
    </div>
  )
}

export default FormPrice