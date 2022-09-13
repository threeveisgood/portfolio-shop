<<<<<<< HEAD:components/user-profile/change-password-form/index.tsx
import { ReactElement } from "react";
=======
>>>>>>> 7bcc2b05bbb443d2a1e6e358326b07897b5440b2:components/profile/profile-form.tsx
import {
  Field,
  FieldError,
  StyledInput,
  StyledLabel,
} from "components/styled/form";
import { FormSubmitButton } from "components/styled/form";
import { useFormik } from "formik";
import Container from "components/styled/container";
import { profileFormValidationSchema } from "lib/yup";
<<<<<<< HEAD:components/user-profile/change-password-form/index.tsx
import useChangePassword from "hooks/useChangePassword";
=======
>>>>>>> 7bcc2b05bbb443d2a1e6e358326b07897b5440b2:components/profile/profile-form.tsx

function ChangePasswordForm(): ReactElement {
  const { mutate } = useChangePassword();

<<<<<<< HEAD:components/user-profile/change-password-form/index.tsx
=======
  const data = await response.json();

  console.log(data);
}

function ProfileForm() {
>>>>>>> 7bcc2b05bbb443d2a1e6e358326b07897b5440b2:components/profile/profile-form.tsx
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: profileFormValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredOldPassword = values.oldPassword;
      const enteredNewPassword = values.newPassword;

      mutate({
        oldPassword: enteredOldPassword,
        newPassword: enteredNewPassword,
      });

      setSubmitting(false);
    },
  });

  return (
    <Container>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <h1>비밀번호 변경</h1>
          <Field>
            <StyledInput
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="new password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="new-password">새 비밀번호</StyledLabel>
          </Field>
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <FieldError>{formik.errors.newPassword}</FieldError>
          ) : null}
          <Field>
            <StyledInput
              type="password"
              id="oldPassword"
              name="oldPassword"
              placeholder="old password"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="old-password">예전 비밀번호</StyledLabel>
          </Field>
          {formik.touched.oldPassword && formik.errors.oldPassword ? (
            <FieldError>{formik.errors.oldPassword}</FieldError>
          ) : null}

          <div>
            <FormSubmitButton type="submit">비밀번호 변경</FormSubmitButton>
          </div>
        </form>
      </section>
    </Container>
  );
}

export default ChangePasswordForm;
