import React, { FC, useState } from 'react';
import { LoginWrapper, InputLogName, InputLogPass, SendLogBtn } from './Login.styled.ts';
import axios  from 'axios'



const Login = () => {
   const [login, setName] = useState("");
   const [pass, setPass] = useState("");

   function handleSubmit(event) {
      event.preventDefault();
      const loginPayload = {Username: login, Password: pass};
      try{
      axios.post("https://localhost:7231/api/Authenticate/login", loginPayload).then((response) => {
         if (response.status != 200)
         {
            alert(response.status);
         }

      }).catch( (e) => console.log(e));
   }
   catch (e) {
      alert(e);
   }
   }
   
   return(<LoginWrapper>
    <InputLogName placeholder='Enter name' onChange={(e) => setName(e.target.value)}></InputLogName>
    
    <InputLogPass placeholder='Enter password' onChange={(e) => setPass(e.target.value)}></InputLogPass>

    <SendLogBtn onClick={handleSubmit}>Login</SendLogBtn>
 </LoginWrapper>);
};

export default Login;
