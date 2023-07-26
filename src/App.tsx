import { useState } from 'react'
import 'aframe';
import VR from './VR';
import './App.css'

type loginProps = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setLogin }: loginProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
  return (
    <div className='app'>
      {
        isLoggedIn ?
          <VR setIsLoggedIn={setIsLoggedIn} /> : <Login setLogin={setIsLoggedIn} />
      }
    </div>
  );
};

export default App;
