import React, { useState } from "react";

import { Link } from "react-router-dom";

import { LoginTitle, LoginButton } from "../../../Components/UI";
import TextField from "../../../Components/Inputs/TextField";

import "./style.css";

const Signing = () => {
  const state = { 
    email: "", 
    emailHasError() { 
      return this.email.length > 0
      && !this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) },
    emailValidation(){ return this.emailHasError() ? "E-mail inválido" : "" }, 
    password: "", 
    passwordHasError() { return this.password.length > 0
      && this.password.length < 8 },  
    passwordValidation() { return this.passwordHasError() ? "Senha tem no minimo 8 digitos" : "" },
    hasError() {
      return this.emailHasError() || this.passwordHasError()
    }
  }

  const [form, setForm] = useState(state);

  const changeState = (field, value) => {
    const newForm = { ...form };
    newForm[field] = value;
    setForm(newForm);
  }

  const handleText = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    changeState(field, value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.hasError()) {
      alert("Preencha os campos corretamente antes de continuar")
      return
    }
  };

  return (
    <>
      <div className="wrapper">
        <form className="container" onSubmit={handleSubmit}>
          <LoginTitle>Log In</LoginTitle>
          <TextField
            inputName="email"
            inputType="email"
            labelText="Email"
            hasError={ form.emailHasError() }
            validationText={ form.emailValidation() }
            handleText={handleText}
          />
          <TextField
            inputName="password"
            inputType="password"
            labelText="Password"
            hasError={ form.passwordHasError() }
            validationText={ form.passwordValidation() }
            handleText={handleText}
          />
          <LoginButton type="submit">Log In</LoginButton>
          <div className="footer">
            <p>New here?</p>
            <Link to="/signup">Create your acccount</Link>
          </div>
         </form>
      </div>
    </>
  );
};

export default Signing;
