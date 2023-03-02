# SandoShop 프로젝트

## 프로젝트 비디오

<img src="https://user-images.githubusercontent.com/41880220/222387583-44c3037c-06d8-462e-bc78-98e1a284c0fd.gif" />

## 설치, 환경설정 및 실행방법

```
git clone https://github.com/threeveisgood/portfolio-shop.git
cd portfolio-shop
yarn
yarn dev
```

## 프로젝트 소개, 기능

SandoShop은 핫딜 정보 공유를 위해 만들어진 사이트입니다.

# 프론트엔드

- Typescript

- React

- Next.js

- Redux

- React Query (v3)

# 백엔드

- Next API Routes

- MongoDB

# 배포

- Vercel

- AWS S3 + AWS CloudFront (이미지 호스팅, CDN)

- AWS Lambda@Edge(이미지 리사이징)

# 주요기능

- 글 목록, 읽기, 쓰기 기능

- 인증, 탈퇴 기능

- 조회 수, 댓글, 답글 기능

- 검색 기능

- 추천 기능

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

- next.js의 getStaticProps, getServerSideProps를 이용하여 정적 페이지, 동적 페이지를 구현하였습니다. Route로 페이지 이동, query string를 활용하여 페이지네이션을 구현하였습니다.

- next-auth는 Next.js 사용할 때 편리하게 인증 기능을 구현 할 수 있어서 도입하였습니다. useSession같이 편하게 Hooks로 클라이언트 인증 상태를 관리할 수 있는 것이 큰 장점이었습니다. 또한 백엔드 코드인 Next API Routes를 사용할 때 역시 Next-auth에서 인증 상태, 유저 정보를 쉽게 받아올 수 있어서 매우 편리했습니다.

- 상태 관리 라이브러리로 커뮤니티가 가장 큰 react-redux를 사용하며 @reduxjs/toolkit은 Redux의 번거로운 문법을 보다 가볍게 쓰기 위해 사용하게 되었습니다.

- react-query는 Redux와 같은 상태 관리 라이브러리가 백엔드와 통신하는 비동기 코드가 맞지 않는 옷이라 생각해서 나온 프레임워크입니다. 강력한 Caching과 프론트엔드와 백엔드 상태관리를 완전히 분리함으로써 깔끔한 코드 작성을 경험 할 수 있었습니다.

- styled-components는 CSS와 같은 스타일들을 컴포넌트화해서 유지보수와 재사용성에서 큰 이점을 얻게해준 라이브러리입니다.

- quill은 에디터 라이브러리입니다. Next.js는 서버 사이드 렌더링을 하기 때문에 Quill이 undefined 되는 이슈가 있어서 Next.js의 Dynamic으로 빌드 타임이 아닌 런타임 시 import 하였습니다.

- aws-sdk와 multer는 AWS S3 저장소에 이미지 파일을 업로드하기 위해 설치된 라이브러리입니다. 업로드 된 이미지는 CloudFront로 배포됩니다.

- mongodb는 Next API Routes를 이용하여 MongoDB 데이터베이스와 통신합니다.

- react-hot-toast는 react-query의 비동기 코드가 에러가 발생하거나 유저의 행동에 따른 결과를 알려주기 위해 사용하였습니다.

- formik은 yup과 같이 쓰면 Form Validation, Error Handling이 매우 편리해지기 때문에 사용하게 되었습니다.

- react-select, react-responsive-carousel은 빠르게 카테고리를 선택하는 select 기능과 이미지 .carousel 기능을 구현하기 위해 도입하였습니다. 이런 라이브러리들에 기대지 않고 직접 네이티브 코드로 구현해보기 위해 다음 프로젝트인 '직접 구현해보는 32가지 프론트엔드 ui 챌린지'로 코드가 대체될 예정입니다.

- bcryptjs는 회원가입할 때 사용자 암호 보안을 위해 사용되었습니다.

- typescript는 개발자의 실수로 인해 발생하는 오류들을 사전에 찾아주고 해결하게 해주며 자동완성 기능이 강력합니다. 또한 요즘 프론트엔드 개발에 필수적인 기술이라 생각해서 사용하게 되었습니다.

## 폴더 구조 설명

```
📦
├─ api-codes
├─ components
│  ├─ auth
│  │  ├─ auth-form
│  │  └─ signup-form
│  ├─ comments
│  │  ├─ add-comment
│  │  ├─ add-reply
│  │  ├─ recommend
│  │  └─ replies-list
│  ├─ common
│  │  ├─ aside
│  │  ├─ ask-modal
│  │  ├─ button
│  │  ├─ carousel
│  │  ├─ comment
│  │  ├─ comments-list
│  │  ├─ container
│  │  ├─ dropdown
│  │  ├─ flexbox
│  │  ├─ form
│  │  ├─ icons
│  │  ├─ loading-spinner
│  │  ├─ main-container
│  │  └─ responsive
│  ├─ header
│  │  └─ nav-bar
│  ├─ layout
│  ├─ pagination
│  ├─ post-list
│  │  ├─ card
│  │  ├─ list-title
│  ├─ post
│  │  ├─ ask-remove-modal
│  │  ├─ contents
│  │  ├─ delete-edit
│  │  └─ recommend
│  ├─ search
│  ├─ upload
│  │  ├─ files-upload
│  │  └─ ui-file-input-button
│  ├─ user-profile
│  │  ├─ change-password-form
│  │  ├─ delete-user
│  └─ write
│     ├─ editor
│     └─ write-action-buttons
├─ hooks
│  ├─ state
├─ lib
├─ pages
│  ├─ api
│  │  ├─ add-post
│  │  ├─ auth
│  │  ├─ comments
│  │  ├─ post
│  │  ├─ posts
│  │  ├─ recommend
│  │  ├─ reply
│  │  ├─ search
│  │  └─ upload-files
│  ├─ auth
│  ├─ category
│  ├─ create-user
│  ├─ post
│  ├─ posts
│  ├─ profile
│  ├─ search
│  └─ write
├─ public
├─ slices
├─ styled
├─ types
```

- api-codes 폴더는 axios와 관련된 코드들을 정리하였습니다. 프로젝트 초기에 react-query의 query,mutation 코드와 묶어져있었지만 추후에 다른 라이브러리로 대체 될 수 있기 때문에 분리해두었습니다.

- components 폴더는 기능들을 폴더별로 구분해서 코드를 작성했습니다. 예를 들어 components/comments/add-comments 폴더는 기본 컴포넌트 코드인 index.tsx, 스타일 코드만 정리한 add-comments.styled.tsx로 구성하여 작성하였습니다.

- hooks 폴더는 react-quert의 useQuery, useMutation 코드들의 폴더입니다. hooks/state는 리덕스 관련 상태 관리 코드입니다.

- lib 폴더는 비밀번호에 bcryptjs로 보안을 강화하는 함수, AWS CloudFront로 배포된 이미지 url을 AWS Lambda@edge로 리사이징하기 위해 query string으로 thumbnail 링크를 만들어주는 함수, yup의 schema validation들을 모아놓은 코드 등 유틸리티들을 모아두었습니다.

- pages의 pages/api 폴더는 Next API Routes에서 지원하는 Serverless Functions를 사용합니다. 별도의 백엔드 환경 구축없이 Vercel에서 간편하게 사용할 수 있어 소규모 프로젝트에 적합합니다.
  pages의 다른 폴더들은 기본적으로 getStaticProps로 렌더링하며 보안이 중요한 경우 getServerSideProps를 사용하였습니다.

- slices 폴더는 Redux 관련된 코드들을 저장합니다.

- styled 폴더는 styled-components의 전역 코드들을 저장합니다.

- types 폴더는 Typescript 타입들을 선언한 폴더입니다.
