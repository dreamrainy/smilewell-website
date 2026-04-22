"use client";
import { useEffect, useRef } from "react";

// ── Reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── EMPATHY
export function Empathy() {
  const ref = useReveal();
  const cards = [
    { icon: "😰", q: "치과 생각만 해도 심장이 두근거려요", a: "충분한 마취와 천천히 진행하는 진료로, 치과가 좋은 기억이 되도록 합니다." },
    { icon: "⏳", q: "무서워서 몇 년째 치료를 미뤄왔어요", a: "미루셨던 거 압니다. 판단 없이 현재 상태부터 차근차근 설명드립니다." },
    { icon: "❌", q: "다른 치과에서 안 된다고 했어요", a: "뼈가 부족하거나 어려운 케이스도 디지털 가이드 수술로 해결합니다." },
    { icon: "💨", q: "스케일링 후 잇몸이 항상 시렸어요", a: "Airflow는 기존 스케일링보다 훨씬 부드럽고 통증이 적습니다." },
    { icon: "🧓", q: "나이가 많아서 임플란트가 걱정돼요", a: "나이 자체가 임플란트를 막지 않습니다. 70~80대 환자분도 많이 치료받고 계십니다." },
    { icon: "🔍", q: "치료 전에 충분히 설명을 듣고 싶어요", a: "이해될 때까지 설명드립니다. 납득이 되셔야 치료를 시작합니다." },
  ];

  return (
    <section ref={ref} id="empathy" style={{ padding: "96px 40px", background: "#F3F1ED" }}>
      <div className="reveal" style={{ marginBottom: "56px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "16px" }}>이런 분들이 오세요</div>
        <h2 style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "16px" }}>
          <em style={{ fontStyle: "normal", color: "#1B4B6B" }}>나 얘기</em>하는 것 같으셨나요?
        </h2>
        <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: 1.8 }}>스마일웰치과는 치과가 무서웠던 경험을 가진 분들을 위해 설계됐습니다.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="grid-3">
        {cards.map((c) => (
          <div key={c.q} className="reveal" style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1px solid #E5E2DC" }}>
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>{c.icon}</div>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "16px", fontWeight: 600, color: "#1A1A1A", marginBottom: "10px", lineHeight: 1.4 }}>{c.q}</div>
            <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{c.a}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.grid-3{grid-template-columns:1fr!important;}section{padding:64px 20px!important;}}`}</style>
    </section>
  );
}

// ── TREATMENTS
export function Treatments() {
  const ref = useReveal();
  const treats = [
    { icon: "🦷", bg: "linear-gradient(135deg,#EFF6FF,#DBEAFE)", badge: "Digital Implant", name: "디지털 임플란트", desc: "CT 기반 가이드 수술로 정확한 위치에 최소 절개로 식립합니다. 뼈이식·고령·전신질환 케이스도 대응합니다.", tags: ["가이드 수술","뼈이식","당일 보철","65세+ 건강보험"] },
    { icon: "💨", bg: "linear-gradient(135deg,#F0FDF4,#DCFCE7)", badge: "Airflow Perio", name: "Airflow 잇몸케어", desc: "미세 분말과 공기압으로 치석·바이오필름을 제거합니다. 기존 스케일링보다 훨씬 편안하고 통증이 적습니다.", tags: ["무통 스케일링","잇몸치료","치주염","임플란트 주위염"] },
    { icon: "🌿", bg: "linear-gradient(135deg,#FFF7ED,#FED7AA)", badge: "Natural Tooth", name: "자연치아 살리기", desc: "가능한 한 뽑지 않습니다. 신경치료·크라운·레진으로 자연치아를 최대한 보존합니다.", tags: ["신경치료","크라운","레진","사랑니"] },
  ];

  return (
    <section ref={ref} id="treatments" style={{ padding: "96px 40px", background: "white" }}>
      <div className="reveal" style={{ marginBottom: "56px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "16px" }}>핵심 진료</div>
        <h2 style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.5px" }}>
          스마일웰의 <em style={{ fontStyle: "normal", color: "#1B4B6B" }}>3가지</em> 전문 진료
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="grid-3">
        {treats.map((t) => (
          <div key={t.name} className="reveal" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E5E2DC" }}>
            <div style={{ height: "180px", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px" }}>{t.icon}</div>
            <div style={{ padding: "24px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "8px" }}>{t.badge}</div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "20px", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>{t.name}</div>
              <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7, marginBottom: "16px" }}>{t.desc}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {t.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "12px", background: "#F3F1ED", color: "#6B7280", fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── WHY US
export function WhyUs() {
  const ref = useReveal();
  const items = [
    { num: "01", title: "🤖 디지털 임플란트", desc: "CT 촬영 → 3D 가이드 설계 → 정확한 식립. 프리핸드 대비 오차 최소화, 절개·통증·회복 모두 유리합니다." },
    { num: "02", title: "💨 Airflow 잇몸케어", desc: "경산 디지털 Airflow 전문 장비 보유. 기존 스케일링보다 편안하고 임플란트 주위염 예방에도 효과적입니다." },
    { num: "03", title: "😌 치과가 무서우신 분들", desc: "무통 마취 시스템, 충분한 상담, 환자 속도 맞춤 진료. 손 들면 언제든 멈춥니다." },
    { num: "04", title: "📋 투명한 비용", desc: "치료 전 서면으로 비용을 안내드립니다. 치료 후 갑자기 추가 비용이 생기지 않습니다." },
    { num: "05", title: "🌿 자연치아 우선", desc: "무조건 뽑지 않습니다. 살릴 수 있는 치아는 최대한 보존하는 것이 원칙입니다." },
    { num: "06", title: "🏥 충분한 상담", desc: "이해될 때까지 설명드립니다. 납득이 되셔야 치료를 시작합니다. 궁금한 것은 언제든 질문해주세요." },
  ];

  return (
    <section ref={ref} id="whyus" style={{ padding: "96px 40px", background: "#F3F1ED" }}>
      <div className="reveal" style={{ marginBottom: "56px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "16px" }}>Why Smilewell</div>
        <h2 style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "16px" }}>
          왜 <em style={{ fontStyle: "normal", color: "#1B4B6B" }}>스마일웰</em>인가요
        </h2>
        <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: 1.8 }}>같은 치료라도 결과가 다릅니다. 6가지 이유를 확인하세요.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="grid-3">
        {items.map((item) => (
          <div key={item.num} className="reveal" style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1px solid #E5E2DC" }}>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "32px", fontWeight: 700, color: "rgba(27,75,107,0.1)", lineHeight: 1, marginBottom: "12px" }}>{item.num}</div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</div>
            <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── STORY
export function Story() {
  const ref = useReveal();
  return (
    <section ref={ref} id="story" style={{ padding: "96px 40px", background: "#1B4B6B", color: "white", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="story-section">
      <div>
        <div className="reveal" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "20px" }}>Our Story</div>
        <h2 className="reveal" style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px", color: "white" }}>
          <em style={{ fontStyle: "normal", color: "#4DB8A0" }}>두렵지 않게</em><br />해드리겠다는<br />약속에서 시작됐습니다.
        </h2>
        <p className="reveal" style={{ fontSize: "15px", lineHeight: 2, color: "rgba(255,255,255,0.75)", marginBottom: "20px", fontWeight: 300 }}>
          봉직의 시절, 마취도 충분히 되지 않은 채로 치료를 시작했을 때 환자분이 손을 드셨습니다.
        </p>
        <p className="reveal" style={{ fontSize: "15px", lineHeight: 2, color: "rgba(255,255,255,0.75)", marginBottom: "20px", fontWeight: 300 }}>
          그날 집에 돌아와 오래 생각했습니다.<br />
          <strong style={{ color: "#4DB8A0" }}>내가 이분을 두렵지 않게 해드렸는가.</strong>
        </p>
        <p className="reveal" style={{ fontSize: "15px", lineHeight: 2, color: "rgba(255,255,255,0.75)", fontWeight: 300 }}>스마일웰은 그 질문에서 시작됐습니다.</p>
        <p className="reveal" style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginTop: "32px" }}>장진영 대표원장 · 스마일웰치과</p>
      </div>
      <div className="reveal" style={{ background: "rgba(255,255,255,0.05)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", padding: "48px" }}>
        <p style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "18px", lineHeight: 1.9, color: "rgba(255,255,255,0.85)", fontWeight: 300 }}>
          "다른 치과에서는 무슨 말인지 몰랐는데,<br />여기서 <strong style={{ color: "#4DB8A0" }}>처음으로 이해했어요.</strong>"<br /><br />
          "생각보다 <strong style={{ color: "#4DB8A0" }}>전혀 안 아팠어요.</strong>"<br /><br />
          "무서워서 10년을 미뤘는데,<br />왜 이제야 왔을까 싶어요."
        </p>
      </div>
      <style>{`@media(max-width:768px){.story-section{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

// ── DOCTORS
export function Doctors() {
  const ref = useReveal();
  const doctors = [
    { icon: "👨‍⚕️", role: "대표원장 · 임플란트", name: "장진영 원장", spec: "디지털 임플란트·가이드 수술·뼈이식 전문. 공포 환자를 위한 무통 진료 시스템 설계.", tags: ["임플란트","디지털 가이드","뼈이식"] },
    { icon: "👩‍⚕️", role: "대표원장 · Airflow", name: "문유리 원장", spec: "Airflow 잇몸케어·치주 치료·자연치아 보존 전문. 세심하고 편안한 진료로 신뢰받습니다.", tags: ["Airflow","잇몸치료","자연치아"] },
    { icon: "👨‍⚕️", role: "대표원장 · 보존", name: "김민수 원장", spec: "신경치료·크라운·레진 전문. 가능한 한 자연치아를 살리는 것을 최우선으로 합니다.", tags: ["신경치료","크라운","레진"] },
  ];

  return (
    <section ref={ref} id="doctors" style={{ padding: "96px 40px", background: "white" }}>
      <div className="reveal" style={{ marginBottom: "56px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "16px" }}>의료진 소개</div>
        <h2 style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.5px" }}>
          스마일웰의 <em style={{ fontStyle: "normal", color: "#1B4B6B" }}>원장</em>을 소개합니다
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="grid-3">
        {doctors.map((d) => (
          <div key={d.name} className="reveal" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E5E2DC" }}>
            <div style={{ height: "200px", background: "linear-gradient(135deg,#F3F1ED,#E8F4F8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px" }}>{d.icon}</div>
            <div style={{ padding: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "6px" }}>{d.role}</div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "22px", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>{d.name}</div>
              <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7, marginBottom: "14px" }}>{d.spec}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {d.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "12px", background: "#F3F1ED", color: "#6B7280", fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── FAQ
export function FAQ() {
  const ref = useReveal();

  const faqs = [
    { cat: "🦷 임플란트", items: [
      { q: "경산에서 디지털 임플란트 잘 하는 치과가 있나요?", a: "경산 정평동 스마일웰치과는 CT 기반 디지털 가이드 임플란트를 전문으로 합니다. 장진영 대표원장이 모든 임플란트 수술을 직접 시행하며, 뼈이식·고령·전신질환 케이스도 대응합니다. 정평역 도보 5분 거리입니다." },
      { q: "임플란트 수술이 너무 무서운데 어떻게 하나요?", a: "충분한 마취 후 진행하며, 수술 중 불편하시면 손을 들어주시면 언제든 멈춥니다. 디지털 가이드 수술은 절개가 최소화되어 수술 시간도 30분~1시간 내외입니다." },
      { q: "뼈가 부족해도 임플란트가 가능한가요?", a: "가능합니다. 정밀 뼈이식(GBR)과 상악동거상술로 대부분의 경우 해결할 수 있습니다. CT 촬영 후 상담에서 정확히 판단해드립니다." },
      { q: "고령이라 임플란트가 걱정됩니다", a: "나이 자체가 임플란트를 막지 않습니다. 70~80대 환자분도 많이 치료받고 계시며, 만 65세 이상은 건강보험이 적용됩니다(평생 2개)." },
    ]},
    { cat: "💨 Airflow", items: [
      { q: "Airflow 스케일링이 일반 스케일링과 뭐가 다른가요?", a: "일반 스케일링은 금속 기구로 치석을 긁어내는 방식이라 진동과 통증이 있습니다. Airflow는 미세 분말과 공기압·물을 이용해 훨씬 부드럽고 통증이 적습니다." },
      { q: "Airflow는 아프지 않나요?", a: "기존 스케일링보다 훨씬 덜 아픕니다. 대부분의 환자분들이 '이게 스케일링 맞나요?'라고 하실 만큼 편안하게 느끼십니다." },
    ]},
    { cat: "😌 치과 공포", items: [
      { q: "치과 공포증이 심한데 치료받을 수 있나요?", a: "네, 가능합니다. 첫 방문 시 치료 없이 상담과 구강 확인만 진행하며, 충분한 설명 후 납득하셔야 치료를 시작합니다. 무통 마취 시스템을 사용하며 치료 중 언제든 중단 가능합니다." },
      { q: "마취 주사가 너무 무서워요", a: "표면마취 젤을 먼저 바른 후 가는 바늘로 천천히 주사합니다. 대부분의 환자분들이 '거의 못 느꼈다'고 하십니다." },
    ]},
  ];

  return (
    <section ref={ref} id="faq" style={{ padding: "96px 40px", background: "#F3F1ED" }}>
      <div className="reveal" style={{ marginBottom: "56px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "16px" }}>FAQ</div>
        <h2 style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "16px" }}>
          자주 묻는 <em style={{ fontStyle: "normal", color: "#1B4B6B" }}>질문</em>
        </h2>
        <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: 1.8 }}>AI 검색에서 가장 많이 나오는 질문들을 모았습니다.</p>
      </div>

      {faqs.map((group) => (
        <div key={group.cat} className="reveal" style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#4DB8A0", marginBottom: "16px", letterSpacing: "0.5px" }}>{group.cat}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }} className="faq-grid">
            {group.items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
      <style>{`@media(max-width:768px){.faq-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.toggle("open");
  };
  return (
    <div ref={ref} onClick={toggle} style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E2DC", overflow: "hidden", cursor: "pointer" }}>
      <div style={{ padding: "18px 20px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-start" }}>
        <span>{q}</span>
        <span style={{ color: "#4DB8A0", fontSize: "18px", fontWeight: 300, flexShrink: 0 }}>+</span>
      </div>
      <div className="faq-answer" style={{ display: "none", padding: "0 20px 18px", paddingTop: "14px", fontSize: "13px", color: "#6B7280", lineHeight: 1.8, borderTop: "1px solid #E5E2DC" }}>{a}</div>
      <style>{`.open .faq-answer{display:block!important;}`}</style>
    </div>
  );
}

// ── REVIEWS
export function Reviews() {
  const reviews = [
    { text: "임플란트 수술이 이렇게 안 아플 수 있다는 게 신기했어요. 디지털 가이드 수술 덕분인지 회복도 엄청 빨랐습니다.", author: "50대 여성 · 디지털 임플란트" },
    { text: "스케일링이 무서워서 3년 동안 못 갔는데, Airflow는 진짜 하나도 안 아팠어요. 이제 정기적으로 다닐 것 같아요.", author: "30대 여성 · Airflow" },
    { text: "다른 치과에서 뼈가 없어서 임플란트 안 된다고 했는데, 여기서 뼈이식하고 성공했어요.", author: "60대 남성 · 임플란트+뼈이식" },
    { text: "치과 공포증이 있는데 선생님이 처음부터 끝까지 설명해주셔서 너무 편했어요.", author: "40대 남성 · 충치치료" },
    { text: "원장님이 치료 전에 무슨 치료인지, 왜 필요한지 다 설명해주세요. 이해하고 치료받으니까 불안이 없었어요.", author: "20대 여성 · 신경치료" },
    { text: "어머니 70대인데 무절개 임플란트로 하셔서 회복이 너무 빠르셨어요.", author: "50대 보호자 · 고령 임플란트" },
  ];
  const doubled = [...reviews, ...reviews];

  return (
    <section style={{ padding: "96px 0", background: "white", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 40px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "16px" }}>Patient Reviews</div>
        <h2 style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.5px" }}>
          환자분들이 남긴 <em style={{ fontStyle: "normal", color: "#1B4B6B" }}>이야기</em>
        </h2>
      </div>
      <div style={{ display: "flex", gap: "20px", animation: "slide 30s linear infinite", width: "max-content" }}>
        {doubled.map((r, i) => (
          <div key={i} style={{ width: "300px", flexShrink: 0, background: "#F3F1ED", borderRadius: "16px", padding: "24px", border: "1px solid #E5E2DC" }}>
            <div style={{ color: "#F59E0B", fontSize: "13px", marginBottom: "12px" }}>★★★★★</div>
            <p style={{ fontSize: "13px", color: "#1A1A1A", lineHeight: 1.75, marginBottom: "14px", fontStyle: "italic" }}>"{r.text}"</p>
            <div style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 500 }}>{r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT
export function Contact() {
  const ref = useReveal();
  return (
    <section ref={ref} id="contact" style={{ padding: "96px 40px", background: "#1B4B6B", color: "white", textAlign: "center" }}>
      <h2 className="reveal" style={{ fontFamily: "'Noto Serif KR',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.3, marginBottom: "16px" }}>
        한 번 더, <em style={{ fontStyle: "normal", color: "#4DB8A0" }}>제대로</em><br />설명드리겠습니다.
      </h2>
      <p className="reveal" style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>첫 방문 시 치료 없이 상담과 구강 확인만 진행합니다. 부담 없이 오세요.</p>
      <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "56px" }}>
        <a href="tel:053-710-2884" style={{ background: "white", color: "#1B4B6B", padding: "14px 28px", borderRadius: "32px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>📞 053-710-2884</a>
        <a href="#" style={{ background: "#FEE500", color: "#3A1D1D", padding: "14px 28px", borderRadius: "32px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>💬 카카오톡 상담</a>
        <a href="#" style={{ background: "white", color: "#1B4B6B", padding: "14px 28px", borderRadius: "32px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>📅 네이버 예약</a>
      </div>
      <div className="reveal contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px", maxWidth: "700px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "40px" }}>
        {[
          { title: "주소", content: "경상북도 경산시 대학로 23\n월드스퀘어 6층" },
          { title: "진료시간", content: "월·목 09:40 – 20:00 (야간)\n화·수·금 09:40 – 18:30\n토 09:40 – 14:00" },
          { title: "오시는 길", content: "정평역 도보 5분\n건물 내 주차 가능" },
        ].map((item) => (
          <div key={item.title}>
            <h4 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#4DB8A0", marginBottom: "8px" }}>{item.title}</h4>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.content}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

// ── FOOTER
export function Footer() {
  return (
    <footer style={{ background: "#0F2A3D", color: "rgba(255,255,255,0.45)", padding: "32px 40px", fontSize: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
      <div>스마일웰치과의원 · 대표 장진영 · 사업자번호 729-27-00369</div>
      <div>경산시 대학로 23 월드스퀘어 6층 · Tel. 053-710-2884</div>
      <div>© 2026 스마일웰치과의원. All rights reserved.</div>
    </footer>
  );
}

// ── MOBILE CTA BAR
export function MobileCta() {
  return (
    <>
      <div style={{ display: "none", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "white", borderTop: "1px solid #E5E2DC", padding: "12px 16px", gap: "10px" }} className="mobile-cta">
        <a href="tel:053-710-2884" style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, textDecoration: "none", background: "#F3F1ED", color: "#1B4B6B" }}>📞 전화</a>
        <a href="#contact" style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, textDecoration: "none", background: "#1B4B6B", color: "white" }}>예약하기</a>
      </div>
      <style>{`@media(max-width:768px){.mobile-cta{display:flex!important;}body{padding-bottom:72px;}}`}</style>
    </>
  );
}
