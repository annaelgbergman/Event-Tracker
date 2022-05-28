import { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {

    const [focused, setFocused] = useState(false)
    const { onChange, errorMessage, id, ...inputProps } = props; 

    const handleFocus = (e) => {
        setFocused(true);
    }
    
  return (
    <div className='FormInput'>
        <input {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()} />
        <p>{errorMessage}</p>
    </div>
  )
}

export default FormInput