# 스마일웰치과 공식 홈페이지

경산 스마일웰치과 Next.js 14 홈페이지

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Inline styles
- **Deploy**: Vercel
- **SEO/AEO**: JSON-LD Schema.org (MedicalClinic, FAQPage)

## 로컬 개발 시작

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 페이지 구조

```
/                  홈페이지 (AEO 최적화)
/implant           디지털 임플란트 (준비중)
/airflow           Airflow 잇몸케어 (준비중)
/preserve          자연치아살리기 (준비중)
/doctors           의료진 소개 (준비중)
/faq               FAQ 전체 (준비중)
```

## 배포 (Vercel)

1. [vercel.com](https://vercel.com) 접속
2. GitHub로 로그인
3. `smilewell-website` 레포 Import
4. Deploy 클릭 → 자동 배포 완료

## 도메인 연결

Vercel 대시보드 → Settings → Domains → `smilewelldental.net` 추가
