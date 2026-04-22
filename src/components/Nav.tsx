"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "64px",
        background: "rgba(255,255,255,0.93)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5E2DC",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "18px",
            fontWeight: 700,
            color: "#1B4B6B",
            letterSpacing: "-0.3px",
          }}
        >
          스마일웰<span style={{ color: "#4DB8A0" }}>.</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "28px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="desktop-nav"
      >
        {[
          { href: "/#treatments", label: "진료안내" },
          { href: "/#whyus", label: "왜 스마일웰" },
          { href: "/#doctors", label: "의료진" },
          { href: "/#faq", label: "자주묻는질문" },
          { href: "/#contact", label: "오시는길" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#6B7280",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="tel:053-710-2884"
        style={{
          background: "#1B4B6B",
          color: "white",
          padding: "9px 20px",
          borderRadius: "24px",
          fontSize: "13px",
          fontWeight: 600,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        예약하기 →
      </Link>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
