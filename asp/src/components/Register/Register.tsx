import React, { FC, useState } from 'react';
import axios from 'axios';
import { RegisterWrapper,InputEmail, InputName, InputPass,SendBtn } from './Register.styled.ts';

const Register  = () => {
   const [email, setEmail] = useState("");
   const [login, setName] = useState("");
   const [pass, setPass] = useState("");

   function handleSubmit(event) {
      event.preventDefault();
      const loginPayload = {Username: login, Email: email, Password: pass};
      try{
      axios.post("https://localhost:7231/api/Authenticate/register", loginPayload).then((response) => {
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
   

   return (<RegisterWrapper>
    <InputEmail placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}></InputEmail>
    
    <InputName placeholder='Enter name' onChange={(e) => setName(e.target.value)}></InputName>
    
    <InputPass placeholder='Enter password' onChange={(e) => setPass(e.target.value)}></InputPass>

    <SendBtn onClick={handleSubmit}>Register</SendBtn>
 </RegisterWrapper>);
};

export default Register;
