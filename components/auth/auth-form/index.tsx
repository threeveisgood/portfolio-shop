import { useState } from "react";
import { signIn, SignInResponse } from "next-auth/client";
import { useRouter } from "next/router";
import {
  Field,
  StyledInput,
  StyledLabel,
  FormSubmitButton,
  FieldError,
  FormTitle,
  FormErrorMessage,
} from "components/common/form";
import { useFormik } from "formik";
import Container from "components/common/container";
import { authFormValidationSchema } from "lib/yup";

function AuthForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const switchAuthModeHandler = () => router.push("/create-user");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: authFormValidationSchema,
    onSubmit: async (values, {}) => {
      const enteredEmail = values.email;
      const enteredPassword = values.password;

      const result: SignInResponse | undefined = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result?.error) {
        router.replace("/");
      } else {
        setErrorMessage("아이디 혹은 비밀번호가 틀립니다.");
      }
    },
  });

  return (
    <Container>
      <section>
        <FormTitle>로그인</FormTitle>
        <form onSubmit={formik.handleSubmit}>
          <Field>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="email">이메일</StyledLabel>
          </Field>
          {formik.touched.email && formik.errors.email ? (
            <FieldError>{formik.errors.email}</FieldError>
          ) : null}

          <Field>
            <StyledInput
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          </Field>
          {formik.touched.password && formik.errors.password ? (
            <FieldError>{formik.errors.password}</FieldError>
          ) : null}

          {formik.touched.name && formik.errors.name ? (
            <FieldError>{formik.errors.name}</FieldError>
          ) : null}

          <div>
            <FormSubmitButton type="submit">로그인</FormSubmitButton>
            <FormSubmitButton type="button" onClick={switchAuthModeHandler}>
              새 계정 만들기
            </FormSubmitButton>
          </div>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </form>
      </section>
    </Container>
  );
}

export default AuthForm;
