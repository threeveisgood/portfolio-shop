import { Field, FieldError, StyledInput, StyledLabel } from "components/styled/form";
import { FormSubmitButton } from "components/styled/form";
import { useFormik, Formik, Form, Field as FormikField   } from "formik";
import Container from "components/styled/container";
import * as yup from "yup";

async function changePasswordHandler(passwordData: any) {
  const response = await fetch("/api/user/change-password", {
    method: "PATCH",
    body: JSON.stringify(passwordData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data)
}

const vadlidationSchema = yup.object({
  oldPassword: yup
    .string()
    .min(8, "8글자 이상 입력하세요")
    .max(50, "비밀번호 길이를 줄여주세요")
    .required("반드시 입력해야하는 항목입니다."),
  newPassword: yup
    .string()
    .min(8, "8글자 이상 입력하세요")
    .max(50, "비밀번호 길이를 줄여주세요")
    .required("반드시 입력해야하는 항목입니다."),
});

function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: vadlidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredOldPassword = values.oldPassword;
      const enteredNewPassword = values.newPassword;

      changePasswordHandler({
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

export default ProfileForm;
