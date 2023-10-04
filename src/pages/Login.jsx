import { useState } from "react";


export default function Login() {
const [loginFormData, setLoginFormData] = useState({email:"", password:""});
    function handleSubmit(event) {
      event.preventDefault();
    }

function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
        <h1>Sign in to your Account</h1>
        <form onSubmit={handleSubmit} className="login-form">
            <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={loginFormData.email}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={handleChange}
                value={loginFormData.password} 
            />
            <button type="submit">Sign In</button>
        </form>
    </div>
  )
}
