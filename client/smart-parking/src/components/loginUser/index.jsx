import React from "react";
import "./LoginUser.css";
import { Form, Formik } from "formik";
import { loginUserRequest } from "../../api/users.api";

function LoginUser() {
  return (
    <>
      <div className="login-user-container">
        <div>
          <img src="/src/assets/Logo.png" />
        </div>
        <Formik
        initialValues={{
          email:"",
          password:"",
        }}
        onSubmit={async(values, actions)=>
          {
            try {
            console.log(values);
            if(!values.email || !values.password){
              return console.log("hay campos vacios, por favor, rellene los campos.");
            }else{
              const response = await loginUserRequest(values);
              //console.log(response);
              //actions.resetForm();
            }
          } catch (error) {
            console.error(error);
          }
        }}  
        >
          {({ handleChange, handleSubmit,
          values, isSubmitting })=>(
            <Form onSubmit={handleSubmit} className="login-form">
            
            <div>
            <p> Login </p>
            <input
              className="user-name inputs"
              name="email"
              placeholder="Insert email"
              onChange={handleChange}
              value={values.email}
            ></input>
            <p> Password </p>
            <input
              type="password"
              className="user-password inputs"
              id="password"
              name="password"
              placeholder="Insert password"
              onChange={handleChange}
              value={values.password}
            ></input>
            <p id="forget-psw"> ¿Olvidaste tu contraseña?</p>
            
            </div>
            <div>
              <button id="submit-button" type="submit" className="loginButton" disabled={isSubmitting}>
                {isSubmitting ? "Ingresando...": "Iniciar Sesión"}
              </button>
            </div>
          </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export { LoginUser };
