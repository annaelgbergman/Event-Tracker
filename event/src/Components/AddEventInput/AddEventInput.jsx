import { useState } from 'react'
import './AddEventInput.css'

const AddEventInput = (props) => {
    
    const [focused, setFocused] = useState(false)
    const { label, onChange, errorMessage, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true)
    }

  return (
    <div className='AddEventInput'>
        <label className='label'>{ label }</label>
        <input {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()} />
        <p>{errorMessage}</p>
    </div>
  )
}

export default AddEventInput