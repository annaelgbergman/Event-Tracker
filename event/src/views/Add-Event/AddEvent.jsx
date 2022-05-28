import './AddEvent.css'
import { useEffect, useState } from 'react'
import AddEventInput from '../../Components/AddEventInput/AddEventInput';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../Store/Actions/eventsAction'
import { useNavigate } from 'react-router-dom';



const AddEvent = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading } = useSelector(state => state.events)

  const { userId } = useSelector(state => state.auth)

  const [addedEvent, setaddedEvent] = useState(false)

  const isAuth = useSelector(state => state.auth.token)


  const [values, setValues] = useState({
    title: "",
    place: "",
    dateTime: "",
    textArea: "",
  });

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Ex: Birthday Party",
      label: "Title",
      errorMessage: "Please enter title",
      required: true
    },
    {
      id: 2,
      name: "place",
      type: "text",
      placeholder: "Add a place",
      label: "Place"
    },
    {
      id: 3,
      name: "dateTime",
      type: "datetime-local",
      label: "When",
      errorMessage: "Please enter date and time",
      required: true
    }
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        ...values,
        userId: userId
      }

      dispatch(addEvent(payload))
      setaddedEvent(true)
    };

    useEffect(() => {
      // Kan lägga till error här
      if(!loading && addedEvent) {
        navigate('/upcomingevents')
      }
    }, [loading, addedEvent, navigate])

  return (

    <div className='AddEvent'>
      {/* <div className='container-wrap'> */}

        <h1 className='head-title'>Add Event</h1>
          <div className='primary-wrap'>
          { isAuth 
            ? <h3>Create new event</h3>
            : <h3>Please login to create event</h3>
            }
           
            <div className='line'></div>
            { 
              isAuth 
            ? 
            <form className='form-control' onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <AddEventInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                  ))}
              <div>
                <label htmlFor="text-area" className='label'>Details</label>
                <textarea  type="text" name="textArea" id="" rows="10" className='text-area' value={values.textArea} placeholder='Add more info' onChange={onChange}></textarea>
              </div>
              <div className='btn-control'>
                <button className='btn'>{ loading ? 'Creating' : 'Create' }</button>
              </div>
            </form>
            : <div></div>
           }
          </div>
      {/* </div> */}
    </div>
  )
}

export default AddEvent