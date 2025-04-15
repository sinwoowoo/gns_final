# gns_final 프로젝트 구성

## 주요 파일 및 디렉토리

### 1. 환경 설정 파일
- `.env`, `.env.dev`, `.env.local`, `.env.prod`: 환경 변수 파일들로, 개발 및 배포 환경에 따라 설정이 다를 수 있습니다.
- `.env copy.dev`: 개발 환경 설정의 복사본으로 보입니다.

### 2. 설정 파일
- `.gitignore`: Git에서 추적하지 않을 파일 및 디렉토리를 정의.
- `.stylelintrc`: 스타일 관련 린트 설정 파일.
- `jsconfig.json`: JavaScript 프로젝트 설정 파일.
- `nuxt.config.ts`: Nuxt.js 애플리케이션 설정 파일.
- `tsconfig.json`: TypeScript 설정 파일.
- `vue.config.js`: Vue.js 프로젝트 설정 파일.
- `staticwebapp.config.json`: 정적 웹 애플리케이션 설정 파일.

### 3. 코드 및 구성 요소
- `app.vue`: Vue.js의 메인 애플리케이션 파일.
- `components/`: Vue.js 컴포넌트 디렉토리.
- `pages/`: Nuxt.js 페이지 디렉토리.
- `plugins/`: Nuxt.js 플러그인 디렉토리.
- `stores/`: 상태 관리 관련 디렉토리.
- `utils/`: 유틸리티 함수 디렉토리.
- `types/`: TypeScript 타입 정의 디렉토리.

### 4. 기타
- `Dockerfile`: Docker 컨테이너 설정 파일.
- `README.md`, `README2.md`: 프로젝트 설명 파일.
- `.github/`: GitHub 워크플로우 및 설정 디렉토리.
- `.nuxt/`: Nuxt.js 빌드 결과물 디렉토리.
- `public/`: 정적 파일 디렉토리.
- `server/`, `service/`: 서버 및 서비스 관련 코드 디렉토리.