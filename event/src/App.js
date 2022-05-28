import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Views from './views/Views';
import { checkUser } from './Store/Actions/authAction'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])
  return (
    <div className="App">
      <Dashboard />
      <Views />
    </div>
  );
}

export default App;
