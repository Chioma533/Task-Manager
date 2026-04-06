import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthLayout from '../../components/layout/AuthLayout'
import Input from '../../components/inputs/Input'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  // Handle Login form submit
  const handleLogIn = async(e) => {
    e.preventDefault()

    if (!validateEmail(email)){
      setError("Please enter a valid email adress")
      return
    }

    if (!password) {
      setError("Please enter the password")
      return
    }

    setError("")

    // login API call
  }
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-1.25 mb-6 ">
          Please enter your details to login
        </p>

        <form onSubmit={handleLogIn}>
          <Input 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label='Email Address'
            placeholder='john@example.com'
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label='Password'
            placeholder='Min 8 Characters'
            type="password"
          />

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type='submit' className='btn-primary'>LOGIN</button>
          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account? {" "}
            <Link className='font-medium text-primary underline' to='/signup'>SignUp</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
    )
}

export default Login