
import './SignUp.css';
import {useFormik } from 'formik';
import SignUpInput from './SignUpInput';
function SignUpForm(){
    
    const validate = values =>{
        const errors ={}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneRegex = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/i;
        const ageRegex = /^[0-9]*$/i;
        if(!values.user){
            errors.user = 'Required'
        }

        if(!values.email){
            errors.email = 'Required'
        }else if(!emailRegex.test(values.email)){
            errors.email = 'Invalid email format'
        }

        if(!values.fullName){
            errors.fullName = 'Required'
        }else if(values.fullName.lenght < 7){
            errors.fullName = 'It must have more than 6 characters'
        }

        if(!values.age){
            errors.age = 'Required'
        }else if(!ageRegex.test(values.age)){
            errors.age = 'Must to be a number'
        }else if(values.age>100){
          errors.age = 'Please insert a age less then 100 years'
        }

        if(!values.phone){
            errors.phone = 'Required'
        }else if(!phoneRegex.test(values.phone)){
            errors.phone = 'Invalid phone format'
        }

        if(!values.password){
            errors.password = 'Required'
        }else if(values.password.lenght < 6){
            errors.password = 'Musb be 6 characters or more'
        }

        if(!values.passwordConfirm){
            errors.passwordConfirm = 'Required'
        }else if(values.password !== values.passwordConfirm){
            errors.passwordConfirm = 'Does not match with password'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues:{
            user:'',
            email:'',
            fullName:'',
            age:'',
            phone:'',
            password:'',
            passwordConfirm:''
        },
        validate,
        onSubmit: (values,{resetForm})=>{
            alert(JSON.stringify(values,null,2));
            resetForm({values: ''});
        }
    });

    return <div className='signUp-form'>
        <h2>Registro</h2>
        <form onSubmit={formik.handleSubmit}>
            
            <SignUpInput 
              id='user'
              name='user'
              label='Usuario'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user}
              formikErrors={formik.errors.user}
              formikTouched={formik.touched.user}
            />
            
            <SignUpInput 
              id='email'
              name='email'
              label='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              formikErrors={formik.errors.email}
              formikTouched={formik.touched.email}
            />
            <SignUpInput 
              id='fullName'
              name='fullName'
              label='Nome Completo'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              formikErrors={formik.errors.fullName}
              formikTouched={formik.touched.fullName}
            />
            <SignUpInput 
              id='age'
              name='age'
              label='Idade'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              formikErrors={formik.errors.age}
              formikTouched={formik.touched.age}
            />
            <SignUpInput 
              id='phone'
              name='phone'
              label='Telefone'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              formikErrors={formik.errors.phone}
              formikTouched={formik.touched.phone}
            />
            <SignUpInput 
              id='password'
              name='password'
              label='Senha'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              formikErrors={formik.errors.password}
              formikTouched={formik.touched.password}
            />
            <SignUpInput 
              id='passwordConfirm'
              name='passwordConfirm'
              label='Confirmacao de senha'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              formikErrors={formik.errors.passwordConfirm}
              formikTouched={formik.touched.passwordConfirm}
            />
            <button type='submit'>Register</button>
        </form>
    </div>
    
    
}

export default SignUpForm;
