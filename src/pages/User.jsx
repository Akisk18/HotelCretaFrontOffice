import PageHeading from "../ui/PageHeading";
import { ButtonRow, Div, Form, Input, Label, Row } from "../ui/Form";
import { useUser } from "../features/useUser";
import Button from "../ui/Button";
import { useUpdateUser } from "../features/useUpdateUser";
import { useForm } from "react-hook-form";

function User() {
  const { user, isLoading } = useUser();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updatedUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updatedUser(
      { password },
      { onSuccess: reset({ password: "", passwordConfirm: "" }) }
    );
  }

  return (
    <>
      <PageHeading>Update your Account</PageHeading>

      <>
        <Div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Label>Full Name: </Label>
              <Input disabled defaultValue={user.user_metadata.fullName} />
            </Row>
            <Row>
              <Label error={errors?.password?.message}>
                New Password(min 8 chars):{" "}
              </Label>
              <Input
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
            </Row>
            <Row>
              <Label error={errors?.passwordConfirm?.message}>
                Repeat New Password:
              </Label>
              <Input
                type="password"
                autoComplete="new-password"
                id="passwordConfirm"
                disabled={isUpdating}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    getValues().password === value || "Passwords need to match",
                })}
              />
            </Row>
            <ButtonRow>
              <Button onClick={reset} type="reset">
                Cancel
              </Button>
              <Button disabled={isLoading}>Update</Button>
            </ButtonRow>
          </Form>
        </Div>
      </>
    </>
  );
}

export default User;
