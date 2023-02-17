import { ReactElement } from "react";
import {
  Field,
  FieldError,
  StyledInput,
  StyledLabel,
  FormSubmitButton,
} from "components/common/form";

import { useFormik } from "formik";
import Container from "components/common/container";
import { profileFormValidationSchema } from "lib/yup";
import useChangePassword from "hooks/useChangePassword";

function ChangePasswordForm(): ReactElement {
  const { mutate } = useChangePassword();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
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
              id="newPasswordConfirm"
              name="newPasswordConfirm"
              placeholder="new password confirm"
              value={formik.values.newPasswordConfirm}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="new-password-confirm">
              새 비밀번호 확인
            </StyledLabel>
          </Field>
          {formik.touched.newPasswordConfirm &&
          formik.errors.newPasswordConfirm ? (
            <FieldError>{formik.errors.newPasswordConfirm}</FieldError>
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
