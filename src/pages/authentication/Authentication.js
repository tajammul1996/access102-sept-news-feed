import { useState, useContext } from 'react';
import { Button, Input } from "@mui/material";

import { CartContext } from "../../Routes";

function Authentication(props) {
  console.log("authentication props", props);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [isLoginPageSelected, setIsLoginPageSelected] = useState(true);
const [error, setError] = useState("");

const { setIsAuthenticated } = useContext(CartContext);

const isValid = () => {
  if (email.length > 0 && password.length > 0) {
    return true;
  } else {
    return false;
  }
}

const onLogin = () => {
  if (isValid()) {
    setError("");
    setLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
      localStorage.setItem("isAuthenticated", true);
      props.history.push("/");
    }, 2000);
    return;
  }

  return setError("Please enter valid credentials");
};


 const renderLoginPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
      <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <Button disabled={loading || !isValid()} onClick={onLogin}>Login</Button>
      <p>{error}</p>
      <button onClick={() => setIsLoginPageSelected(false)}>signup instead of login</button>
    </div>)
 }

 const renderSignupPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
      <h1>signup</h1>
      <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <Button disabled={loading} onClick={onLogin}>signup</Button>
      <p>{error}</p>
      <button onClick={() => setIsLoginPageSelected(true)}>login instead of signup</button>
    </div>)
 }


  return (
    <div>
      {isLoginPageSelected ? renderLoginPage() : renderSignupPage()}
    </div>
  );
}

export default Authentication;