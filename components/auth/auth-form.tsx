import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import {
  FormField,
  StyledInput,
  StyledLabel,
  FormSubmitLastButton,
  FormSubmitButton,
} from "components/styled/form";
import { useFormik } from "formik";
import Container from "components/styled/container";

async function createUser(email: any, password: any, nickname: any) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, nickname }),
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
      nickname: ""
    },
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail = values.email
      const enteredPassword = values.password
      const enteredNickname = values.nickname

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
          const result = await createUser(enteredEmail, enteredPassword, enteredNickname);
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
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormField>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="email">이메일</StyledLabel>
          </FormField>

          <FormField>
            <StyledInput
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          </FormField>

          {isLogin ? null : (
            <FormField>
              <StyledInput
                type="text"
                id="nickname"
                name="nickname"
                placeholder="nickname"
                value={formik.values.nickname}
                onChange={formik.handleChange}
              />
              <StyledLabel htmlFor="nickname">닉네임</StyledLabel>
            </FormField>
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
