import { useFormik } from 'formik';
import './App.css';
import { formValidation } from './schema';

const App = () => {

  const inititalValues = {
    name: "",
    email: "",
    password: "",
    confirm_pass: ""
  }

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: inititalValues,
    validationSchema: formValidation,
    onSubmit: (values, action) =>{
      console.log(values);
      action.resetForm();
    }
  })

  return (
    <div className='container'>
      <div className='form'>
        <h1 style={{textAlign: "center", color: 'brown', fontFamily: "Courier New"}}>React Form</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-element'>
              <label htmlFor='name'>Name</label> <br/>
              <input type='text' name='name' id='name' placeholder='name' autoComplete='off'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.name && touched.name ? <p className='error-msg'>{errors.name}</p> : null}
            </div>
            <div className='form-element'>
              <label htmlFor='email'>Email</label> <br/>
              <input type='email' name='email' id='email' placeholder='Email' autoComplete='off'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.email && touched.email ? <p className='error-msg'>{errors.email}</p> : null}
            </div>
            <div className='form-element'>
              <label htmlFor='password'>Password</label> <br/>
              <input type='password' name='password' id='password' placeholder ='password' autoComplete='off'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.password && touched.password ? <p className='error-msg'>{errors.password}</p> : null}
            </div>
            <div className='form-element'>
              <label htmlFor='confirm_pass'>Confirm Password</label> <br/>
              <input type='password' name='confirm_pass' id='confirm_pass' placeholder='confirm password' autoComplete='off'
              value={values.confirm_pass}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.confirm_pass && touched.confirm_pass ? <p className='error-msg'>{errors.confirm_pass}</p> : null}
            </div>
            <div className='submit'>
              <button type='submit'> Submit </button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default App;