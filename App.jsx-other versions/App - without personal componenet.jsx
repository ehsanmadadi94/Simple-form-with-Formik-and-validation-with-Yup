
import { Form, Formik , ErrorMessage , Field } from 'formik';
import './App.css'

function App() {

  const validateHandler = (values)=>{
    let errors ={};
    if(values.name===''){
      errors.name='this field is required'
    }else if(values.name.length<5){
      errors.name= 'please enter a valid name'
    }
    if(values.username===''){
      errors.username='this field is required'
    }else if(values.username.length<5){
      errors.username= 'please enter a valid username'
    }
    if(values.email===''){
      errors.email='this field is required'
    }else if(values.email.length<5){
      errors.email= 'please enter a vailid email address'
    } else if (! /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,4}$/i.test(values.email)){
      errors.email= ' please enter a vailid email address'
    }
    if(values.password===''){
      errors.password='this field is required'
    }else if(values.password.length<5){
      errors.password= 'password is too short'
    }
    console.log(errors)
    return errors
  }
  const submitHandler= (values)=>{
    console.log(values)
  }


  return (
    <>
     <Formik
        initialValues={{
          name:'',
          username:'',
          email:'',
          password:'',
          about:'',
          gender:'male',
          rules:false
        }}
        validate={validateHandler}
        onSubmit={submitHandler}
      >
     <Form >
      <div>
        <label >Name: </label>
        <input type="text"
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span>: null} */}
        <Field name='name' type='text' placeholder='please enter your name'/>
        <ErrorMessage name='name' />
      </div>
      <div>
        <label >UserName: </label>
        {/* <input type="text"
        name='username'
        value={formik.values.usernamee}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username ? <span>{formik.errors.username}</span>: null} */}
        <Field name='username' type= 'text' placeholder='please enter your username'/>
        <ErrorMessage name= 'username' />
      </div>
      <div>
        <label >Email: </label>
        {/* <input type="text"
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>: null} */}
        <Field name= 'email' type='text' placeholder='please enter your email address'/>
        <ErrorMessage name='email' />
      </div>
      <div>
        <label >PassWord: </label>
        {/* <input type="password"
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span>: null} */}
        <Field name='password' type='text'  placeholder='please enter your password'/>
        <ErrorMessage name="password" />
      </div>
      <div>
        <label>About Me</label>
        <Field name='about' as='textarea' placeholder="tell us about yourself" />
        <ErrorMessage name='about' />
      </div>
      <div>
        <label>Gender</label>
        <Field name='gender' as='select'>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <ErrorMessage name='gender'/>
      </div>
      <div>
        <label >I have read and accept the rules.</label>
        <Field name='rules' type='checkbox' />
        <ErrorMessage name="rules"/>
      </div>
      <button type="submit">Send</button>
     </Form>
     </Formik>
     </>
  )
}

export default App
