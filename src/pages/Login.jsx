import styled from "styled-components";
import Button from "../ui/Button";
import { useState } from "react";
import { useLogin } from "../features/useLogin";
import SpinnerMini from "../ui/SpinnerMini";

const LoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f1;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  border: 1px solid #34495e;

  border-radius: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <LoginPage>
      <Image src="./logo_transparent.png" />
      <h3>Log In to get Started</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Enter your email:</Label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Enter your password:</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />

        <Button disabled={isLoading}>
          {!isLoading ? "Log In" : <SpinnerMini />}
        </Button>
      </Form>
    </LoginPage>
  );
}

export default Login;
