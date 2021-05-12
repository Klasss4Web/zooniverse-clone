// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as yup from 'yup';


// const style = {
//   width: "350px",
//   height: "50px",
//   marginTop: "20px"
// }

// const form = {
//   display: "flex",
//   flexDirection: "column",

// }

// export default function RegistrationForm() {
//   const [firstName, setFirstName] = React.useState('');
//   const handleChange = (e) => {
//     setFirstName(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(firstName)
//   }

//   const initialValues = {firstName: "", lastName: ""}
//   const validationSchema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required()
//   })

//   return (
//     <div>
//       <Form style={form} onSubmit={handleSubmit}>
//         <input style={style} onChange={(e)=>handleChange(e)} type="text" name="firstName" id="firstName" placeholder="enter your first name"/>
//         <input style={style} onChange={(e)=>handleChange(e)}  type="text" name="lastName" id="lastName" placeholder="enter your last name"/>
//         <button style={style} type="submit">Submit</button>
//       </Form>
//     </div>
//   )
// }
