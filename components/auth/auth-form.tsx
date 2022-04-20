import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import {
  Field,
  StyledInput,
  StyledLabel,
  FormSubmitLastButton,
  FormSubmitButton,
  FieldError,
  FormTitle
} from "components/styled/form";
import { useFormik } from "formik";
import Container from "components/styled/container";
import * as yup from "yup";

async function createUser(email: any, password: any, name: any) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const vadlidationSchema = yup.object({
  email: yup
    .string()
    .required("반드시 입력해야하는 항목입니다."),
  password: yup
    .string()
    .required("반드시 입력해야하는 항목입니다."),
});

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: ""
    },
    validationSchema: vadlidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail = values.email
      const enteredPassword = values.password
      const enteredname = values.name

      if (isLogin) {
        const result: any = await signIn("credentials", {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        });

        if (!result.error) {
          router.replace("/");
        }
      } else {
        try {
          const result = await createUser(enteredEmail, enteredPassword, enteredname);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }

      setSubmitting(false);
    },
  });

  return (
    <Container>
      <section>
        <FormTitle>{isLogin ? "로그인" : "회원가입"}</FormTitle>
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

          {isLogin ? null : (
            <Field>
              <StyledInput
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <StyledLabel htmlFor="name">닉네임</StyledLabel>
            </Field>
          )}

          <div>
            <FormSubmitButton>
              {isLogin ? "로그인" : "계정 만들기"}
            </FormSubmitButton>
            <FormSubmitLastButton type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "새 계정 만들기" : "계정이 이미 있으신가요?"}
            </FormSubmitLastButton>
          </div>
        </form>
      </section>
    </Container>
  );
}

export default AuthForm;
