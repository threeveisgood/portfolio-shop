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

async function createUser(email: any, password: any) {
  const response = await fetch("/api/auth/signup", {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

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
    },
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail = values.email;
      const enteredPassword = values.password;

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
          const result = await createUser(enteredEmail, enteredPassword);
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
            <StyledLabel htmlFor="email">email</StyledLabel>
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
            <StyledLabel htmlFor="password">Your Password</StyledLabel>
          </FormField>

          <div>
            <FormSubmitButton>{isLogin ? "Login" : "Create Account"}</FormSubmitButton>
            <FormSubmitLastButton type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </FormSubmitLastButton>
          </div>
        </form>
      </section>
    </Container>
  );
}

export default AuthForm;
