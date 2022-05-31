import './SignUp.css';
import {useFormik } from 'formik';

function SignUp(){
    
    const validate = values =>{
        const errors ={}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneRegex = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/i;
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
        }else if(values.age > 120){
            errors.age = 'You are not that old'
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
        onSubmit: values=>{
            alert(JSON.stringify(values,null,2));
            
        }
    });

    return <div className='signUp-form'>
        <h2>Registro</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='user'>Usuário</label>
            <input id='user' name='user' onChange={formik.handleChange} value={formik.values.user}/>
            {formik.errors.user ? <div className='errorMessage'>{formik.errors.user}</div> : null}

            <label htmlFor='email'>Email</label>
            <input id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email ? <div className='errorMessage'>{formik.errors.email}</div> : null}

            <label htmlFor='fullName'>Nome Completo</label>
            <input id='fullName' name='fullName' onChange={formik.handleChange} value={formik.values.fullName}/>
            {formik.errors.fullName ? <div className='errorMessage'>{formik.errors.fullName}</div> : null}

            <label htmlFor='age'>Idade</label>
            <input id='age' name='age' onChange={formik.handleChange} value={formik.values.age}/>
            {formik.errors.age ? <div className='errorMessage'>{formik.errors.age}</div> : null}

            <label htmlFor='phone'>Tefefone - xx-xxxx-xxxx</label>
            <input id='phone' name='phone' onChange={formik.handleChange} value={formik.values.phone}/>
            {formik.errors.phone ? <div className='errorMessage'>{formik.errors.phone}</div> : null}

            <label htmlFor='password'>Senha</label>
            <input id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password}/>
            {formik.errors.password ? <div className='errorMessage'>{formik.errors.password}</div> : null}

            <label htmlFor='passwordConfirm'>Confirmação de senha</label>
            <input id='passwordConfirm' name='passwordConfirm' type='password' onChange={formik.handleChange} value={formik.values.passwordConfirm}/>
            {formik.errors.passwordConfirm ? <div className='errorMessage'>{formik.errors.passwordConfirm}</div> : null}

            <button type='submit'>Register</button>
        </form>
    </div>
    
    
}

export default SignUp;