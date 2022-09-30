# SandoShop 프로젝트

## 프로젝트 비디오

## 설치, 환경설정 및 실행방법

## 프로젝트 소개, 기능

SandoShop은 핫딜 정보 공유를 위해 만들어진 사이트입니다.

1. 인증, 탈퇴 기능

2. 글 목록, 읽기, 쓰기 기능

3. 댓글, 답글 기능

4. 검색 기능

## 사용한 주요 프레임워크 및 라이브러리 설명

```
    "@reduxjs/toolkit": "^1.8.5",
    "aws-sdk": "^2.1040.0",
    "axios": "^0.24.0",
    "bcryptjs": "^2.4.3",
    "bson": "^4.6.1",
    "cookie": "^0.4.2",
    "dayjs": "^1.10.8",
    "formik": "^2.2.9",
    "mongodb": "^4.2.0",
    "multer": "^1.4.3",
    "multer-s3": "^2.10.0",
    "next": "^12.1.0",
    "next-auth": "3",
    "next-connect": "^0.11.0",
    "quill": "^1.3.7",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-hot-toast": "^2.3.0",
    "react-icons": "^4.3.1",
    "react-query": "^3.28.0",
    "react-quill": "^2.0.0-beta.4",
    "react-redux": "^7.2.5",
    "react-responsive-carousel": "^3.2.22",
    "react-select": "^5.2.2",
    "reselect": "^4.0.0",
    "styled-components": "^5.3.1",
    "yup": "^0.32.11"
    "typescript": "4.8.2"(Dev Dependency)
```

- next.js의 getStaticProps, getServerSideProps를 이용하여 정적 페이지, 동적 페이지를 구현하였습니다. Route으로 페이지 이동, query string를 활용하여 페이지네이션을 구현하였습니다.

- next-auth는 Next.js 사용할 때 편리하게 인증 기능을 구현 할 수 있어서 도입하였습니다. useSession같이 편하게 hooks로 클라이언트 인증 상태를 관리할 수 있는 것이 큰 장점이었습니다. 또한 백엔드 코드인 Next API Routes를 사용할 때 역시 Next-auth에서 인증 상태, 유저 정보를 쉽게 받아올 수 있어서 매우 편리했습니다.

- 상태 관리 라이브러리로 가장 커뮤니티가 큰 react-redux를 사용하며 @reduxjs/toolkit은 Redux의 번거로운 문법을 보다 가볍게 쓰기 위해 사용하게 되었습니다.

- styled-components는 CSS와 같은 스타일들을 컴포넌트화해서 유지보수와 재사용성에서 큰 이점을 얻게해준 라이브러리입니다.

- quill은 에디터 라이브러리입니다. Next.js는 서버 사이드 렌더링을 하기 때문에 Quill이 undefined 되는 이슈가 있어서 Next.js의 Dynamic으로 빌드 타임이 아닌 런타임 시 import 하였습니다.

- aws-sdk와 multer는 AWS S3 저장소에 이미지 파일을 업로드하기 위해 설치된 라이브러리입니다. 업로드 된 이미지는 CloudFront로 배포됩니다.

- mongodb는 Next API Routes를 이용하여 MongoDB 데이터베이스와 통신합니다.

- react-hot-toast는 React-Query의 비동기 코드가 에러가 발생하거나 유저의 행동에 따른 결과를 알려주기 위해 사용하였습니다.

- formik은 yup과 같이 쓰면 form validation이 매우 편리해지기 때문에 사용하게 되었습니다.

- react-select, react-responsive-carousel은 빠르게 카테고리를 선택하는 select 기능과 이미지 .carousel 기능을 구현하기 위해 도입하였습니다. 이런 라이브러리들에 기대지 않고 직접 네이티브 코드로 구현해보기 위해 다음 프로젝트인 '직접 구현해보는 32가지 프론트엔드 ui'로 코드가 대체될 예정입니다.

- bcryptjs는 회원가입할 때 사용자 암호 보안을 위해 사용되었습니다.

- Typescript는 개발자의 실수로 인해 발생하는 오류들을 사전에 찾아주고 해결하게 해주며 자동완성 기능이 강력합니다. 또한 요즘 웹 프론트엔드 개발에 필수적인 기술이라 생각해서 사용하게되었습니다.
