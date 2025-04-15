# GNS Project Structure Analysis

## 프로젝트 개요
이 프로젝트는 Nuxt.js 3를 기반으로 한 웹 애플리케이션입니다. Vue 3와 TypeScript를 사용하여 개발되었으며, 모던 웹 개발 도구와 라이브러리들을 활용하고 있습니다.

## 기술 스택
- **Frontend Framework**: Nuxt.js 3
- **Programming Language**: TypeScript
- **State Management**: Pinia
- **UI Components**: Vue 3
- **Charts**: ApexCharts
- **HTTP Client**: Axios
- **Styling**: SCSS

## 프로젝트 구조

```
├── assets/            # 정적 자원 (이미지, 스타일 등)
├── components/        # 재사용 가능한 Vue 컴포넌트
│   ├── banner/       # 배너 관련 컴포넌트
│   ├── layout/       # 레이아웃 컴포넌트
│   └── page/         # 페이지별 컴포넌트
├── pages/            # 라우팅 페이지
│   ├── guide/        # 가이드 페이지
│   ├── intro/        # 소개 페이지
│   ├── member/       # 회원 관련 페이지
│   ├── service/      # 서비스 페이지
│   └── support/      # 지원 페이지
├── plugins/          # Nuxt 플러그인
├── public/           # 공개 정적 파일
├── server/           # 서버 관련 코드
├── service/          # API 서비스 로직
├── stores/           # Pinia 스토어
├── types/            # TypeScript 타입 정의
└── utils/            # 유틸리티 함수
```

## 주요 기능 및 구성요소

### 1. 컴포넌트 구조
- **Banner Components**: 배너 관련 컴포넌트
- **Layout Components**: 페이지 레이아웃을 위한 컴포넌트
- **Page Components**: 각 페이지별 특화된 컴포넌트

### 2. 라우팅 구조
- 가이드 섹션
- 소개 페이지
- 회원 관리
- 서비스 페이지
- 지원 섹션

### 3. API 통신
- Axios를 사용한 HTTP 클라이언트 구현
- TypeScript 인터페이스를 통한 타입 안정성 보장
- 체계적인 API 서비스 구조

### 4. 상태 관리
- Pinia를 사용한 상태 관리
- 영구 저장소 플러그인 통합

## 개발 환경 설정

### 필수 요구사항
- Node.js
- npm 또는 yarn

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 프리뷰
npm run preview
```

### 환경 설정
프로젝트는 다양한 환경(.env 파일들)을 지원합니다:
- 개발 환경 (.env.dev)
- 프로덕션 환경 (.env.prod)
- 로컬 환경 (.env.local)

## 배포
Docker를 통한 컨테이너화 지원:
- Dockerfile 포함
- 정적 웹 앱 설정 (staticwebapp.config.json)

## 코드 품질
- TypeScript를 통한 정적 타입 검사
- StyleLint를 통한 스타일 코드 품질 관리
- VS Code 설정 포함 