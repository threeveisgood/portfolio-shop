import { useRef } from "react";
import { FormField, StyledInput, StyledLabel } from "components/styled/form";
import { FormSubmitButton } from "components/styled/form";
import Container from "components/styled/container";

function ProfileForm(props: any) {
  const oldPasswordRef = useRef<any>();
  const newPasswordRef = useRef<any>();

  function submitHandler(event: any) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
      <h1>비밀번호 변경</h1>
        <FormField>
          <StyledInput
            type="password"
            id="new-password"
            placeholder="new password"
            ref={newPasswordRef}
          />
          <StyledLabel htmlFor="new-password">새 비밀번호</StyledLabel>
        </FormField>
        <FormField>
          <StyledInput
            type="password"
            id="old-password"
            placeholder="old password"
            ref={oldPasswordRef}
          />
          <StyledLabel htmlFor="old-password">예전 비밀번호</StyledLabel>
        </FormField>

        <div>
          <FormSubmitButton>비밀번호 변경</FormSubmitButton>
        </div>
      </form>
    </Container>
  );
}

export default ProfileForm;
