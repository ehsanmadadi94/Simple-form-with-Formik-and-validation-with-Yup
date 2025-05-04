import './App.css'
import { Form , Formik , ErrorMessage , Field } from "formik";
import TextInput from "./components/TextInput";
import { boolean , object , string } from "yup";

function App() {
  // const validateHandler = (values)=>{
  //   let errors ={};
  //   if(values.name===''){
  //     errors.name='this field is required'
  //   }else if(values.name.length<5){
  //     errors.name= 'please enter a valid name'
  //   }
  //   if(values.username===''){
  //     errors.username='this field is required'
  //   }else if(values.username.length<5){
  //     errors.username= 'please enter a valid username'
  //   }
  //   if(values.email===''){
  //     errors.email='this field is required'
  //   }else if(values.email.length<5){
  //     errors.email= 'please enter a vailid email address'
  //   } else if (! /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,4}$/i.test(values.email)){
  //     errors.email= ' please enter a vailid email address'
  //   }
  //   if(values.password===''){
  //     errors.password='this field is required'
  //   }else if(values.password.length<5){
  //     errors.password= 'password is too short'
  //   }
  //   console.log(errors)
  //   return errors
  // }
  let registerFormSchema = object().shape({
    name:string().required('وارد کردن فیلد نام الزامی است').min(3,'حداقل طول نام 3 کاراکتر است'),
    username : string().required('وارد کردن فیلد نام کاربری الزامی است').min(6,'حداقل طول نام کاربری 6 کاراکتر است'),
    email:string().required('وارد کردن فیلد ایمیل الزامی است').email(),
    password:string().required('وارد کردن فیلد پسورد الزامی است').min(8,'حداقل طول رمز عبور 8 کاراکتر است'),
    about:string().required('وارد کردن فیلد درباره ما الزامی است'),
    gender:string().required('لطفا جنسیت خود را انتخاب کنید').matches(/(male|female)/),
    rules:boolean().required('پذیرفتن قوانین الزامی است')
  })

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
        // validate={validateHandler}
        validationSchema={registerFormSchema}
        onSubmit={submitHandler}
      >
     <Form >
      <div>
        <TextInput name='name' type="text" label='Your Name : ' placeholder="please enter yourname" />
      </div>
      <div>
        <TextInput name='username'  type='text' label='Your Username : ' placeholder='please enter your username'/>
      </div>
      <div>
        <TextInput name='email' type='email' label='Your Email Address : ' placeholder='please enter your email address' />
      </div>
      <div>
        <TextInput name='password' type='password' label="Your Password : " placeholder='please enter your password' />
      </div>
      <div>
        <TextInput name= 'about' as='textarea' label='About : ' placeholder='please tell us about yourself' />
      </div>
      <div>
        <label>Gender : </label>
        <Field name='gender' as='select'>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <ErrorMessage name='gender'/>
      </div>
      <div>
        <TextInput name='rules' type='checkbox' label='I have read and accept the rules.' />
      </div>
      <button type="submit">Send</button>
     </Form>
     </Formik>
     </>
  )
}

export default App
