import React, { useState } from 'react';
import LoginComp from '../components/login.component';
import Register from '../components/register.component';
import { Radio } from 'antd';

const Login = () => {
  const [Login,setLogin] = useState(true)
  return (
<div className='login-card'>
  <div className='row'>
  <Radio.Group options={['Login','Register']}
   value={Login ? 'Login' : 'Register'}
  onChange={()=>{
    setLogin(!Login)
  }}  optionType="button" />

  </div>
  <div> {
    Login ?  <LoginComp></LoginComp> :<Register></Register>}

  </div>

</div>  )
}

export default Login;