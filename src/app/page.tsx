import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  Empathy,
  Treatments,
  WhyUs,
  Story,
  Doctors,
  FAQ,
  Reviews,
  Contact,
  Footer,
  MobileCta,
} from "@/components/Sections";
import RevealObserver from "@/components/RevealObserver";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스마일웰치과 | 경산 디지털 임플란트 · Airflow 잇몸케어",
  description:
    "경산 정평동 스마일웰치과. 디지털 임플란트, Airflow 잇몸케어, 자연치아살리기 전문. 치과가 무서우신 분들을 위한 맞춤 진료. 정평역 도보 5분.",
};

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main>
        <Hero />
        <Empathy />
        <Treatments />
        <WhyUs />
        <Story />
        <Doctors />
        <FAQ />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
