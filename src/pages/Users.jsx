import styled from "styled-components";
import Button from "../ui/Button";
import { useSignUp } from "../features/useSignup";
import { useForm } from "react-hook-form";
import { Div, Input, Label, Row, Form, ButtonRow } from "../ui/Form";

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: #34495e;
`;

function Users() {
  const { signup, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <>
      <H2>Sing Up a new Account</H2>{" "}
      <Div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Label error={errors?.fullName?.message}>Full Name:</Label>
            <Input
              type="text"
              id="fullName"
              disabled={isLoading}
              {...register("fullName", { required: "This field is required" })}
            />
          </Row>
          <Row>
            <Label error={errors?.email?.message}> Email:</Label>
            <Input
              type="email"
              id="email"
              disabled={isLoading}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </Row>
          <Row>
            <Label error={errors?.password?.message}>
              Password (min 8 characters) :
            </Label>
            <Input
              type="password"
              id="password"
              disabled={isLoading}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password requires 8 characters",
                },
              })}
            />
          </Row>
          <Row>
            <Label error={errors?.passwordConfirm?.message}>
              Repeat Password:
            </Label>
            <Input
              type="password"
              id="passwordConfirm"
              disabled={isLoading}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password ||
                  "Passwords need to be the same",
              })}
            />
          </Row>
          <ButtonRow>
            <Button onClick={reset} type="reset">
              Cancel
            </Button>
            <Button>Sign Up</Button>
          </ButtonRow>
        </Form>
      </Div>
    </>
  );
}

export default Users;
