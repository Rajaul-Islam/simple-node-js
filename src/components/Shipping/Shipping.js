import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'
const Shipping = () => {
    const  {user}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

      console.log(data)
    };
    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder='name' defaultValue={user.displayName} {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input defaultValue={user.email} placeholder='email' {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && <span style={{color:'red'}}>This field is required</span>}
            <input placeholder='address' {...register("address", { required: true })} />
            <input placeholder='City'{...register("city", { required: true })} />
            <input placeholder='phone number' {...register("phone", { required: true })} />

            <input type="submit" />
        </form>
    );
};

export default Shipping;