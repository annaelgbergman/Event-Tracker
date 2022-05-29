import './Register.css'
import FormInput from '../../Components/FormInput/FormInput'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { registerUser } from '../../Store/Actions/authAction'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()

  const { loading } = useSelector(state => state.events)

  const { error }  = useSelector(state => state.auth)

  const navigate = useNavigate()

  const user = useSelector(state => state.auth.token)


  const [values, setValues] = useState({
    firstName: "",
    email: "",
    password: ""
  });


  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Firstname",
      errorMessage: "Please enter your name",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email",
      required: true
    },
    {
      id: 3,
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
    dispatch(registerUser(values))
  }

  useEffect(() => {
    if(user) {
    navigate("/loggedin")
    }
  }, [user, navigate])

  return (
    <div className='Register'>
        <h1 className='head-title'>Register</h1>
          <form className='primary-wrap' onSubmit={handleSubmit}>
            <h3>Please register to create event</h3>
              <div className='line'></div>
            <div className="form-control">
            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))}
            </div>
            <button className='btn m-b-1'>{ loading ? 'Loading' : 'Register' }</button>
            <p className='error'>{error && 'This email already exist. Please enter another email'}</p>
          </form>
    </div>
  )
}

export default Register