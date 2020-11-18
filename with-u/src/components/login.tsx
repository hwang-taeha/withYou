import React from "react";
import styled from "styled-components";

const SessionLogin = styled.section``;
const LoginTitle = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 32px;
  color: #fff;
  text-align: center;
`;
const Label = styled.label`
  position: absolute;
  left: 18px;
  top: 30px;
  font-size: 18px;
  color: #fff;
  transition: top 0.5s ease;
`;
const InputLoginName = styled.input`
  width: 100%;
  padding: 20px 10px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 18px;
  color: #212121;
  outline: none;

  &:focus ~ ${Label} {
    top: 0;
    font-size: 13px;
    color: #bfbbba;
  }
`;
const InputLoginPWS = styled.input.attrs({
  type: "password",
})`
  width: 100%;
  padding: 20px 10px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 18px;
  color: #212121;
  outline: none;
  &:focus ~ ${Label} {
    top: 0;
    font-size: 13px;
    color: #bfbbba;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
  background: #166cea;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
const Form = styled.form`
  width: 400px;
`;
const Div = styled.div`
  margin-top: 20px;
  position: relative;
  z-index: 2;
  text-align: center;
`;
const Atag = styled.a`
  font-size: 15px;
  color: #999;
  text-decoration: none;
`;
export default function Login() {
  return (
    <SessionLogin>
      <LoginTitle>With You</LoginTitle>
      <Form>
        <Div>
          <InputLoginName></InputLoginName>
          <Label>User Name</Label>
        </Div>
        <Div>
          <InputLoginPWS></InputLoginPWS>
          <Label>Password</Label>
        </Div>
        <Div>
          <Button>Login</Button>
        </Div>
      </Form>
      <Div>
        <Atag href="#">Forget password?</Atag>
      </Div>
    </SessionLogin>
  );
}
