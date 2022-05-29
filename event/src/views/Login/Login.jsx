import { Link } from 'react-router-dom'
import './Login.css'
import FormInput from '../../Components/FormInput/FormInput'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../Store/Actions/authAction'
 

const Login = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { loading } = useSelector(state => state.events)
  const { error }  = useSelector(state => state.auth)

  const user = useSelector(state => state.auth.token)

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email",
      required: true
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please enter password",
      required: true
    }
  ]

  const onChange = e => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(loginUser(values))
  }

  useEffect(() => {
    if(user) {
    navigate("/loggedin")
    }
  }, [user, navigate])
  

  return (
    <div className='Login'>
        <h1 className='head-title'>Event.</h1>
          <form className='primary-wrap' onSubmit={handleSubmit}>
            <h3>Please login to see or create event</h3>
              <div className='line'></div>
            <div className="form-control">
              {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))}
            </div>
            <h4 className='link-title mb-1'>Not a member yet? <Link to='/Register' className='link'>Register now</Link></h4>
            <button className='btn m-b-1'>{ loading ? 'Loading' : 'Login'}</button>
            <p className='error'>{error && 'The email adress or password you entered is incorrect, please try again'}</p>
          </form>
    </div>
  )
}

export default Login