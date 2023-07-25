import { useState } from 'react'
import 'aframe';
import VR from './VR';
import './App.css'

type loginProps = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

const Login = ({ setLogin, setUsername }: loginProps) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsername(e.currentTarget.username.value)
    setLogin(true)
  }
  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <h1>Virtual Reality Experience</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button>Login</button>
      </form>
    </>
  )
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  return (
    <div className='app'>
      {
        isLoggedIn ?
          <VR user={username} setIsLoggedIn={setIsLoggedIn} /> : <Login setUsername={setUsername} setLogin={setIsLoggedIn} />
      }
    </div>
  );
};

export default App;
