import { useRouter } from "next/router";
import {
  Field,
  StyledInput,
  StyledLabel,
  FormSubmitButton,
  FieldError,
  FormTitle,
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
    .email("이메일 형식으로 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다."),
  password: yup
    .string()
    .min(8, "최소 8글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다."),
  name: yup
    .string()
    .min(2, "최소 2글자 이상 입력해주세요.")
    .max(12, "최대 12글자까지만 가능합니다.")
    .required("반드시 입력해야하는 항목입니다."),
});

function SignUpForm() {
  const router = useRouter();

  const switchAuthModeHandler = () => {
    router.push("/auth");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: vadlidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail = values.email;
      const enteredPassword = values.password;
      const enteredname = values.name;

      try {
        const result = await createUser(
          enteredEmail,
          enteredPassword,
          enteredname
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <Container>
      <section>
        <FormTitle>회원가입</FormTitle>
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

          <div>
            <FormSubmitButton type="submit">계정 만들기</FormSubmitButton>
            <FormSubmitButton type="button" onClick={switchAuthModeHandler}>
              계정이 이미 있으신가요?
            </FormSubmitButton>
          </div>
        </form>
      </section>
    </Container>
  );
}

export default SignUpForm;
