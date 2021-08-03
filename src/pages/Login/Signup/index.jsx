import React, {useState} from 'react';
import { 
    Link
  } from 'react-router-dom'
import { LoginTitle, LoginButton } from "../../../Components/UI"
import TextField from '../../../Components/Inputs/TextField'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './style.css'

//ToDo: incluir as validacoes do nome e confirmacao da senha

const Signup = () => {

  const state = { 
    name: "",
    nameHasError() {
      return false;
    },
    nameValidation() {
      return this.nameHasError() ? "Erro" : ""
    },
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
    },
    confirmPassword: "",
    confirmPasswordHasError() {
      return false;
    },
    confirmPasswordValidation() {
      return this.confirmPasswordHasError() ? "Erro" : ""
    }
  }

    const [form, setForm] = useState(state)
  
    const handleText = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newUser = {...form}
  
        newUser[field] = value
        setForm(newUser)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(form);
    };

    return (
        <>
        <div className="wrapper">
            <Link to="/signin"> <ArrowBackIosIcon className="left-arrow" fontSize="large"/> </Link>
          <form className="container" onSubmit={handleSubmit}>
            <LoginTitle>Create Account</LoginTitle>
            <TextField 
              inputName="name"
              inputType="text"
              labelText="Name"
              hasError={ form.nameHasError() }
              validationText={ form.nameValidation() }
              handleText={handleText}
            />
            <TextField 
              inputName="email"
              inputType="email"
              labelText="Email"
              hasError={ form.emailHasError() }
              validationText={ form.emailValidation() }
              handleText={handleText}
            />
            <TextField 
              inputName="passsword"
              inputType="passsword"
              labelText="Password"
              hasError={ form.passwordHasError() }
              validationText={ form.passwordValidation() }
              handleText={handleText}
            />
            <TextField 
              inputName="confirmPassword"
              inputType="password"
              labelText="Confirm Password"
              hasError={ form.confirmPasswordHasError() }
              validationText={ form.confirmPasswordValidation() }
              handleText={handleText}
            />
            <LoginButton type="submit">Create</LoginButton>
          </form>
        </div>
      </>
    )
}

export default Signup