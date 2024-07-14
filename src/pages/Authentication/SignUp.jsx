import axios from 'axios';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmitReg =(e)=>{
     e.preventDefault()
     axios.post("http://localhost:3001/register",{name,email,password})
     .then(res => {console.log("Register data",res)
      navigate("/login")
     })
     .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="p-6 bg-white rounded-md max-w-[450px] mx-auto shadow-lg mt-20">
        <h2 className="py-5 text-center text-3xl">SignUp</h2>
        <form onSubmit={handleSubmitReg}>
          <div className="mb-3 space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="w-full px-2 py-1.5 outline-none rounded border border-blue-400"
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3 space-y-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="w-full px-2 py-1.5 outline-none rounded border border-blue-400"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 space-y-1">
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="w-full px-2 py-1.5 outline-none rounded border border-blue-400"
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <h5>Already have an account ?</h5>
            <Link to={"/login"}>
              <span className="text-blue-300">Login</span>
            </Link>
          </div>
          <button type="submit" className="mt-5 w-full h-9 bg-blue-500 hover:bg-blue-700 duration-300 text-white flex items-center justify-center rounded-md">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
