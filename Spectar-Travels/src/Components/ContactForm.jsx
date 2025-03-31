
import React, { useEffect } from 'react'
import { useState } from 'react'

const ContactForm = () => {
    const initialValues = {username: "", email:"", phone: "", message: ""}
            const [formValues, setFormValues] = useState(initialValues)
            const [formErrors, setFormErrors] = useState({});
            const [isSubmit, setIsSubmit] = useState(false)
    
    
            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormValues({ ...formValues, [name]: value })
            }
            const handleSubmit = (e) => {
                e.preventDefault();
                setFormErrors(validate(formValues));
                setIsSubmit(true)
            }
    
            useEffect(() => {
                console.log(formErrors)
                if(Object.keys(formErrors).length === 0 && isSubmit) {
                    console.log(formValues)
                }
            }, [formErrors])
            const validate = (values) => {
                const errors = {};
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
                if (!values.username) {
                    errors.username = "Username is required!";
                  }
                  if (!values.email) {
                    errors.email = "Email is required!";
                  } else if (!regex.test(values.email)) {
                    errors.email = "This is not a valid email format!";
                  }
                 /*  if (!values.country) {
                    errors.country = "Country is required!";
                  }
                  if (!values.budget) {
                    errors.budget = "Budget is required!";
                  }
                  if (!values.purpose) {
                    errors.purpose = "Purpose is required!";
                  } */
                  if (!values.phone) {
                    errors.phone = "Phone is required!";
                  }
                  if(!values.message) {
                    errors.message = "Message is required!";
                  }

                  return errors;
            }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className=' border border-slate-200 px-4   shadow-md rounded-2xl'>
            <div className='my-6'>
                <div>
                    <label htmlFor="username" 
                        className='block font-semibold text-xl md:text-2xl '>Full Name</label>
                    <input 
                        type="text" id="username" name="username" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.username} onChange={handleChange} autoFocus 
                    />
                </div>
                <p className='text-red-600'>{formErrors.username}</p>

                <div>
                    <label htmlFor="email" 
                        className='block font-semibold text-xl md:text-2xl '>Email</label>
                    <input 
                        type="email" id="email" name="email" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.email} onChange={handleChange}
                    />
                </div>
                <p className='text-red-600'>{formErrors.email}</p>

               {/*  <div>
                    <label htmlFor="country" 
                        className='block font-semibold text-xl md:text-2xl '>Country</label>
                    <input 
                        type="text" id="country" name="country" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.country} onChange={handleChange} 
                    />
                </div>
                <p className='text-red-600'>{formErrors.country}</p>

                <div>
                    <label htmlFor="budget" 
                        className='block font-semibold text-xl md:text-2xl '>Budget for travel</label>
                    <input 
                        type="text" id="budget" name="budget" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.budget} onChange={handleChange} 
                    />
                </div>
                <p className='text-red-600'>{formErrors.budget}</p>
                <div>
                    <label htmlFor="purpose" 
                        className='block font-semibold text-xl md:text-2xl '>Purpose of travel</label>
                    <input 
                        type="text" id="purpose" name="purpose" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.purpose} onChange={handleChange} 
                    />
                </div>
                <p className='text-red-600'>{formErrors.purpose}</p> */}
                <div>
                    <label htmlFor="phone" 
                        className='block font-semibold text-xl md:text-2xl '>Phone</label>
                    <input 
                        type="text" id="phone" name="phone" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.phone} onChange={handleChange} 
                    />
                </div>
                <p className='text-red-600'>{formErrors.phone}</p>
                <div>
                    <label htmlFor="message" 
                        className='block font-semibold text-xl md:text-2xl '>Message</label>
                    <textarea 
                         id="message" name="message" 
                        className='w-full border border-slate-300 py-3 my-2 text-xl font-normal rounded-2xl' 
                        value={formValues.message} onChange={handleChange} 
                    />
                </div>
                
                <p className='text-red-600'>{formErrors.message}</p>

               <button 
                type='submit' 
                className='bg-[#2B70EF] text-white text-xl px-6 py-3 rounded-xl w-full md:w-6/12 md:mx-[25%] text-center mt-3 '>
                    Submit
                </button>
               
            </div>
           </form>
    </div>
  )
}

export default ContactForm