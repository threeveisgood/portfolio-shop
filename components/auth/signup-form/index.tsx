import { useRouter } from "next/router";
import {
  Field,
  StyledInput,
  StyledLabel,
  FormSubmitButton,
  FieldError,
  FormTitle,
} from "components/common/form";
import { useFormik } from "formik";
import Container from "components/common/container";
import useCreateUser from "hooks/useCreateUser";
import LoadingSpinner from "components/common/loading-spinner";
import { createUserVadlidationSchema } from "lib/yup";

function SignUpForm() {
  const router = useRouter();

  const { mutate: createUser, isLoading: createUserIsLoading } =
    useCreateUser();

  const switchAuthModeHandler = () => {
    router.push("/auth");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordsecond: "",
      name: "",
    },
    validationSchema: createUserVadlidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredEmail = values.email;
      const enteredPassword = values.password;
      const enteredname = values.name;

      if (createUserIsLoading) {
        return <LoadingSpinner />;
      }

      createUser(
        {
          email: enteredEmail,
          password: enteredPassword,
          name: enteredname,
        },
        {
          onSuccess: () => {
            router.push("/auth");
          },
        }
      );

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
          {formik.touched.password && formik.errors.password ? (
            <FieldError>{formik.errors.password}</FieldError>
          ) : null}

          <Field>
            <StyledInput
              type="password"
              id="passwordsecond"
              name="passwordsecond"
              placeholder="password second"
              value={formik.values.passwordsecond}
              onChange={formik.handleChange}
            />
            <StyledLabel htmlFor="passwordConfirm">비밀번호 확인</StyledLabel>
          </Field>
          {formik.touched.passwordsecond && formik.errors.passwordsecond ? (
            <FieldError>{formik.errors.passwordsecond}</FieldError>
          ) : null}

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
          {formik.touched.name && formik.errors.name ? (
            <FieldError>{formik.errors.name}</FieldError>
          ) : null}

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
