import { Field , ErrorMessage } from "formik";
export default function TextInput ({children ,...props}){
    return(
    <div>
            <label htmlFor={props.id || props.name } >{props.label}</label>
            <Field {...props}/>
            <ErrorMessage name={props.name} />
          </div>
    )
}
