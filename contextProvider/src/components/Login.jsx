import React ,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
const [username, setUsename]  = useState('')
const [password, setPassword] = useState('') 

const {setUser} = useContext(UserContext)

  const handleSubmit = () =>{

  }
  return (
    <div>
      <h2>Login</h2>
      <input type='text'
      value={username}
      onChange={(e)=> setUsename(e.target.value)}
      placeholder='usename'/>
      <input type='text' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='usename'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login