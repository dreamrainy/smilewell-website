"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 40px 60px",
        background:
          "linear-gradient(135deg, #EFF6FF 0%, #F0FDF8 50%, #FEFCE8 100%)",
      }}
    >
      {/* Background radial */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(77,184,160,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(27,75,107,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: "640px", position: "relative", zIndex: 1 }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(77,184,160,0.12)",
            border: "1px solid rgba(77,184,160,0.3)",
            color: "#0D9488",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            marginBottom: "28px",
          }}
        >
          <span style={{ fontSize: "8px", animation: "pulse 2s infinite" }}>
            ●
          </span>
          디지털 임플란트 전문
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#1A1A1A",
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          치과 치료가
          <br />
          <em
            style={{
              fontStyle: "normal",
              color: "#1B4B6B",
              position: "relative",
              display: "inline-block",
            }}
          >
            좋은 기억
            <span
              style={{
                position: "absolute",
                bottom: "2px",
                left: 0,
                right: 0,
                height: "3px",
                background: "#4DB8A0",
                borderRadius: "2px",
                opacity: 0.6,
              }}
            />
          </em>
          이<br />
          될 수 있도록.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "17px",
            color: "#6B7280",
            lineHeight: 1.8,
            marginBottom: "36px",
            fontWeight: 300,
          }}
        >
          무섭지 않게. 아프지 않게.{" "}
          <strong style={{ color: "#1A1A1A", fontWeight: 500 }}>
            제대로 설명드리고.
          </strong>
          <br />
          경산 스마일웰치과가 처음부터 함께합니다.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href="tel:053-710-2884"
            style={{
              background: "#1B4B6B",
              color: "white",
              padding: "14px 28px",
              borderRadius: "32px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(27,75,107,0.25)",
            }}
          >
            📞 053-710-2884
          </a>
          <a
            href="#faq"
            style={{
              background: "white",
              color: "#1B4B6B",
              padding: "14px 28px",
              borderRadius: "32px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              border: "1.5px solid #E5E2DC",
            }}
          >
            자주 묻는 질문 →
          </a>
        </div>

        {/* Trust items */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { icon: "🤖", label: "디지털 임플란트" },
            { icon: "💨", label: "Airflow 잇몸케어" },
            { icon: "😌", label: "치과가 무서우신 분들" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "#6B7280",
              }}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative circle - desktop only */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "42%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
        className="hero-visual"
      >
        <div
          style={{
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(77,184,160,0.15), rgba(27,75,107,0.1))",
            border: "1px solid rgba(77,184,160,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "30px",
              borderRadius: "50%",
              border: "1px dashed rgba(77,184,160,0.3)",
              animation: "rotate 20s linear infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "80px",
              color: "rgba(27,75,107,0.06)",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.1,
              userSelect: "none",
            }}
          >
            스마
            <br />
            일웰
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
