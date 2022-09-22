import * as yup from "yup";

export const createUserVadlidationSchema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다."),
  password: yup
    .string()
    .min(8, "최소 8글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다."),
  passwordsecond: yup
    .string()
    .min(8, "최소 8글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다.")
    .oneOf([yup.ref("password"), null], "패스워드가 다릅니다."),
  name: yup
    .string()
    .min(2, "최소 2글자 이상 입력해주세요.")
    .max(12, "최대 12글자까지만 가능합니다.")
    .required("반드시 입력해야하는 항목입니다."),
});

export const authFormValidationSchema = yup.object({
  email: yup.string().required("반드시 입력해야하는 항목입니다."),
  password: yup.string().required("반드시 입력해야하는 항목입니다."),
});

export const addCommentSchema = yup.object().shape({
  comment: yup
    .string()
    .min(2, "2글자 이상 입력해주세요.")
    .max(500, "500자 제한을 초과하였습니다.")
    .required("내용을 입력해주세요."),
});

export const profileFormValidationSchema = yup.object({
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
  newPasswordConfirm: yup
    .string()
    .min(8, "최소 8글자 이상 입력해주세요.")
    .required("반드시 입력해야하는 항목입니다.")
    .oneOf([yup.ref("newPassword"), null], "패스워드가 다릅니다."),
});

export const searchValidationSchema = yup.object({
  search: yup.string().max(50).required("Required"),
});
