import { object , string } from "yup";
import './App.css'
import { useState } from "react";

function App() {
  const [form , setForm] = useState({
    email:'',
    password:''
  })
  const [errors , setErrors] = useState({
    email:'',
    password:''
  })

  const submitHandler = async(e)=>{
    e.preventDefault();
    let formSchema = object({
      email : string().required().email(),
      password : string().required().min(6)
    })

    try {
      await formSchema.validate(form , {
        abortEarly:false
      })
    } catch (error) {
      let allErrors = {}
      error.inner.forEach((e)=>{
        allErrors[e.path] = e.message
      })
      setErrors(allErrors)
    }

  }
  const changeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value ,
    })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <>
          <label htmlFor="email">Email : </label>
          <input type="text"  name='email' value={form.emaill}  onChange={changeHandler}/>
          {errors.email? <span>{errors.email}</span> : null}
        </>
        <br />
        <>
          <label htmlFor="password">Password : </label>
          <input type="text"  name='password' value={form.password}  onChange={changeHandler}/>
          {errors.password ? <span>{errors.password}</span> : null}
        </>
        <br />
        <button type="submit">Send Form</button>
      </form>
    </>
  )
}

export default App
