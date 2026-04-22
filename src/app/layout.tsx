import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스마일웰치과 | 경산 디지털 임플란트 · Airflow 잇몸케어",
  description:
    "경산 정평동 스마일웰치과. 디지털 임플란트, Airflow 잇몸케어, 자연치아살리기 전문. 치과가 무서우신 분들을 위한 공포환자 특화 진료. 정평역 도보 5분.",
  keywords:
    "경산치과, 경산임플란트, 디지털임플란트, airflow스케일링, 정평동치과, 스마일웰치과, 경산잇몸치료",
  openGraph: {
    title: "스마일웰치과 | 경산 디지털 임플란트 · Airflow",
    description:
      "치과가 무서우신 분들을 위한 경산 스마일웰치과. 디지털 임플란트·Airflow 잇몸케어 전문.",
    url: "https://smilewelldental.net",
    siteName: "스마일웰치과",
    locale: "ko_KR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "스마일웰치과의원",
  alternateName: "Smilewell Dental Clinic",
  url: "https://smilewelldental.net",
  telephone: "053-710-2884",
  address: {
    "@type": "PostalAddress",
    streetAddress: "대학로 23 월드스퀘어 6층",
    addressLocality: "경산시",
    addressRegion: "경상북도",
    postalCode: "38430",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.8198,
    longitude: 128.7411,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Thursday"],
      opens: "09:40",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday"],
      opens: "09:40",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:40",
      closes: "14:00",
    },
  ],
  medicalSpecialty: ["Dentistry", "Implantology", "Periodontology"],
  availableService: [
    { "@type": "MedicalProcedure", name: "디지털 임플란트" },
    { "@type": "MedicalProcedure", name: "Airflow 잇몸케어" },
    { "@type": "MedicalProcedure", name: "자연치아살리기" },
    { "@type": "MedicalProcedure", name: "뼈이식 임플란트" },
    { "@type": "MedicalProcedure", name: "신경치료" },
  ],
  hasMap: "https://naver.me/smilewell",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
