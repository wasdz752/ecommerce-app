import { useContext, useEffect } from 'react';
import { useState } from 'react';
import ShopContext from '../context/ShopContext';
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const { setToken, backendUrl, navigate, token } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "api/users/register", {name, email, password})

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('New user Registered')
          setName('');
          setPassword('');
          setEmail('')
          setCurrentState("Login")
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + "api/users/login", {email, password});

        if (response.data.success) {

          setToken(response.data.token)
          localStorage.setItem('token', response.data.token);
          navigate('/');
          toast.success(response.data.message);
          window.location.reload();
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate])

  return (
    <form
      onSubmit={onSubmmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text 3x1"> {currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>

      <div className="w-full px-3 py-2 flex flex-col gap-4">
        {currentState === 'Sign Up' ? (
          <input
            type="text"
            className="w-Full px-3 py-2 border border-gray-880"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
        ) : null}

        <input
          type="email"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          type="password"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className=" cursor-pointer">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>
        <button className="w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 ">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default Login;