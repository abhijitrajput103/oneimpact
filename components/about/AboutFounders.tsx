"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import kartikPortrait from "@/public/images/founder-kartik-mittal.webp";
import kajolPortrait from "@/public/images/founder-kajol-chavan.webp";

const SPARK_COLORS = ["#ffd60a", "#2457ff", "#f4f1ea", "#ffd60a"];

export function AboutFounders() {
  const [activeFounder, setActiveFounder] = useState<number>(0);
  const secRef = useRef<HTMLElement>(null);
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const lastSparkTime = useRef<number>(0);

  // Spark burst creator
  const createSpark = useCallback((x: number, y: number, burst: boolean) => {
    if (typeof document === "undefined") return;
    const spark = document.createElement("i");
    spark.className = "founders-spk";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    const col = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
    spark.style.setProperty("--k", col);

    if (burst) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 90;
      spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
      const size = 8 + Math.random() * 10;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
    } else {
      spark.style.setProperty("--dx", `${Math.random() * 40 - 20}px`);
    }

    document.body.appendChild(spark);
    setTimeout(() => {
      spark.remove();
    }, 850);
  }, []);

  // Section pointer move for glow & trail sparks
  const handleSectionPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      secRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      secRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);

      const now = Date.now();
      if (now - lastSparkTime.current > 50) {
        lastSparkTime.current = now;
        createSpark(e.clientX, e.clientY, false);
      }
    },
    [createSpark]
  );

  // Photo 3D tilt tracking
  const handlePhotoPointerMove = (
    e: React.PointerEvent<HTMLDivElement>,
    element: HTMLDivElement | null
  ) => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty("--ry", `${x * 18}deg`);
    element.style.setProperty("--rx", `${-y * 14}deg`);
  };

  const handlePhotoPointerLeave = (element: HTMLDivElement | null) => {
    if (!element) return;
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
  };

  // Focus a specific founder (1 or 2) or toggle/reset (0)
  const focusFounder = useCallback(
    (n: number) => {
      setActiveFounder((prev) => {
        const next = prev === n ? 0 : n;
        if (next !== 0) {
          const targetRef = next === 1 ? p1Ref.current : p2Ref.current;
          if (targetRef) {
            const rect = targetRef.getBoundingClientRect();
            for (let i = 0; i < 14; i++) {
              createSpark(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
            }
          }
        }
        return next;
      });
    },
    [createSpark]
  );

  // Crown click burst
  const handleCrownClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    for (let i = 0; i < 26; i++) {
      createSpark(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
    }
  };

  // Keyboard shortcut listeners (1, 2, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") focusFounder(0);
      if (e.key === "1") focusFounder(1);
      if (e.key === "2") focusFounder(2);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusFounder]);

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#070707" }}>
      <section
        id="founders"
        ref={secRef}
        className="founders-sec"
        onPointerMove={handleSectionPointerMove}
        aria-label="Our Founders"
      >
        <style>{`
          .founders-sec {
            --bg: #070707;
            --fg: #f4f1ea;
            --blue: #1236e6;
            --yellow: #ffd60a;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: clamp(34px, 4vw, 60px) clamp(20px, 4vw, 70px) clamp(20px, 3vw, 40px);
            overflow: hidden;
            isolation: isolate;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "eb eb" "p1 t1" "wv wv" "t2 p2";
            column-gap: clamp(24px, 4vw, 80px);
            row-gap: clamp(16px, 2.5vw, 32px);
            align-items: center;
            background: var(--bg);
            color: var(--fg);
            font-family: var(--font-manrope, 'Manrope', system-ui, sans-serif);
          }

          .founders-sec::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background: radial-gradient(440px circle at var(--mx, 50%) var(--my, 30%), rgba(255, 214, 10, .11), transparent 60%);
          }

          .founders-sec .grain {
            position: absolute;
            inset: 0;
            z-index: 5;
            pointer-events: none;
            opacity: .13;
            mix-blend-mode: screen;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='.8' numOctaves='2'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
          }

          .founders-sec .eb {
            grid-area: eb;
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: .04em;
            z-index: 3;
          }

          .founders-sec .eb i {
            width: 160px;
            height: 1px;
            background: #fff;
            opacity: .8;
          }

          .founders-sec .corner {
            position: absolute;
            z-index: 0;
            pointer-events: none;
          }

          .founders-sec .c1 {
            right: 0;
            top: 0;
            width: clamp(200px, 18vw, 320px);
            height: clamp(100px, 9vw, 160px);
            background: var(--blue);
            clip-path: polygon(18% 0, 100% 0, 100% 100%, 92% 78%, 84% 90%, 70% 52%, 56% 66%, 40% 30%, 28% 38%);
          }

          .founders-sec .c2 {
            left: 0;
            bottom: 0;
            width: clamp(240px, 20vw, 360px);
            height: clamp(170px, 15vw, 260px);
            background: var(--blue);
            clip-path: polygon(0 30%, 10% 42%, 22% 62%, 40% 80%, 60% 100%, 0 100%);
          }

          .founders-sec .c2::after {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--yellow);
            clip-path: polygon(24% 70%, 60% 100%, 40% 100%, 18% 84%);
            transform: translate(40px, 0);
          }

          .founders-sec .photo {
            position: relative;
            z-index: 2;
            cursor: pointer;
            transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) rotate(var(--r));
            transition: transform .18s ease-out, opacity .4s, filter .4s;
          }

          .founders-sec .photo img {
            display: block;
            width: 100%;
            height: auto;
            filter: drop-shadow(0 18px 24px rgba(0, 0, 0, .55));
          }

          .founders-sec .p1 {
            grid-area: p1;
            --r: -2deg;
            margin-top: -30px;
            justify-self: center;
            width: 100%;
            max-width: clamp(340px, 34vw, 540px);
          }

          .founders-sec .p2 {
            grid-area: p2;
            --r: 2deg;
            justify-self: center;
            width: 100%;
            max-width: clamp(340px, 34vw, 540px);
          }

          .founders-sec .p1 img {
            -webkit-mask-image: linear-gradient(#000 84%, transparent 98%);
            mask-image: linear-gradient(#000 84%, transparent 98%);
          }

          .founders-sec .photo:hover {
            transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) rotate(var(--r)) scale(1.05);
          }

          .founders-sec .photo.on {
            transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) rotate(0deg) scale(1.09);
            z-index: 10;
          }

          .founders-sec .dim {
            opacity: .25 !important;
            filter: grayscale(1);
            transition: opacity .4s, filter .4s;
          }

          .founders-sec .txt {
            position: relative;
            z-index: 3;
            cursor: pointer;
          }

          .founders-sec .t1 {
            grid-area: t1;
            padding-bottom: 20px;
            max-width: 680px;
          }

          .founders-sec .t2 {
            grid-area: t2;
            padding-top: 30px;
            max-width: 680px;
          }

          .founders-sec h1 {
            margin: 0 0 clamp(8px, 2vw, 28px);
            font-family: var(--font-playfair, 'Playfair Display', Georgia, serif);
            font-weight: 900;
            font-size: clamp(44px, 7vw, 104px);
            line-height: 1;
            letter-spacing: -.03em;
            display: flex;
            align-items: center;
            gap: .2em;
            flex-wrap: wrap;
          }

          .founders-sec h1 .hl {
            position: relative;
            display: inline-block;
            padding: .02em .22em .08em;
            font-style: italic;
            color: #0a0a0a;
            z-index: 0;
          }

          .founders-sec h1 .hl::before {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--yellow);
            z-index: -1;
            transform: rotate(-1.5deg) scaleX(0);
            transform-origin: left;
            animation: wipe .7s .8s cubic-bezier(.7, 0, .2, 1) forwards;
            clip-path: polygon(0 20%, 3% 4%, 2% 36%, 6% 0, 100% 8%, 98% 30%, 100% 52%, 97% 76%, 100% 100%, 50% 94%, 10% 100%, 3% 86%, 0 64%);
          }

          @keyframes wipe {
            to {
              transform: rotate(-1.5deg) scaleX(1);
            }
          }

          .founders-sec h2 {
            margin: 0 0 12px;
            font-family: var(--font-playfair, 'Playfair Display', serif);
            font-style: italic;
            font-weight: 900;
            font-size: clamp(34px, 4.6vw, 66px);
            line-height: 1.05;
            letter-spacing: -.02em;
            opacity: 0;
            animation: founders-fade .8s forwards;
            animation-delay: var(--d);
            transition: opacity .4s, filter .4s;
          }

          .founders-sec .role {
            display: inline-block;
            position: relative;
            padding: .3em 1.2em;
            margin-bottom: 16px;
            font-weight: 800;
            font-size: clamp(14px, 1.7vw, 24px);
            text-transform: uppercase;
            color: #0a0a0a;
            z-index: 0;
            opacity: 0;
            animation: founders-fade .8s forwards;
            animation-delay: calc(var(--d) + .15s);
            transition: opacity .4s, filter .4s;
          }

          .founders-sec .role::before {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--yellow);
            z-index: -1;
            transform: rotate(-.8deg);
            clip-path: polygon(0 25%, 3% 0, 100% 6%, 98% 40%, 100% 100%, 4% 94%, 1% 70%);
          }

          .founders-sec p.bio {
            margin: 0;
            font-size: clamp(14px, 1.55vw, 22px);
            line-height: 1.45;
            max-width: 640px;
            color: #eeebe4;
            opacity: 0;
            animation: founders-fade .8s forwards;
            animation-delay: calc(var(--d) + .3s);
            transition: opacity .4s, filter .4s;
          }

          @keyframes founders-fade {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: none;
            }
          }

          .founders-sec .line {
            display: block;
            width: 260px;
            height: 18px;
            margin-top: 16px;
            transition: opacity .4s, filter .4s;
          }

          .founders-sec .line path {
            fill: none;
            stroke-width: 6;
            stroke-linecap: round;
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            animation: founders-dr 1s 2s ease-out forwards;
          }

          .founders-sec .wave {
            grid-area: wv;
            position: relative;
            width: 100%;
            height: 110px;
            margin: -10px 0;
            z-index: 0;
            pointer-events: none;
          }

          .founders-sec .wave path {
            fill: none;
            stroke: var(--yellow);
            stroke-width: 4;
            stroke-dasharray: 2400;
            stroke-dashoffset: 2400;
            animation: founders-dr 2.2s 1s ease-out forwards;
          }

          @keyframes founders-dr {
            to {
              stroke-dashoffset: 0;
            }
          }

          .founders-sec .crown {
            position: absolute;
            right: 3%;
            top: 90px;
            width: 84px;
            z-index: 3;
            transform: rotate(10deg);
            animation: founders-wob 3s ease-in-out infinite;
            cursor: pointer;
          }

          @keyframes founders-wob {
            50% {
              transform: rotate(-2deg) translateY(-6px);
            }
          }

          .founders-sec .sp {
            position: absolute;
            z-index: 3;
            width: 60px;
            stroke: var(--yellow);
            stroke-width: 4;
            stroke-linecap: round;
            fill: none;
          }

          .founders-sec .hint {
            margin-left: auto;
            font-family: var(--font-manrope, 'Manrope', sans-serif);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: #000;
            background: var(--yellow);
            border: 0;
            border-radius: 99px;
            padding: 9px 16px;
            cursor: pointer;
            animation: founders-pl 2s ease-in-out infinite;
            position: relative;
            z-index: 6;
          }

          @keyframes founders-pl {
            50% {
              box-shadow: 0 0 0 8px rgba(255, 214, 10, .18);
            }
          }

          .founders-sec .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height .5s, opacity .4s, margin .4s;
          }

          .founders-sec .chips.show {
            max-height: 160px;
            opacity: 1;
            margin-top: 16px;
          }

          .founders-sec .chips span {
            font-weight: 800;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: .06em;
            padding: 8px 14px;
            border-radius: 99px;
            transform: translateY(14px) scale(.8);
            transition: transform .5s cubic-bezier(.3, 1.7, .4, 1);
            transition-delay: calc(var(--k, 0) * .07s);
          }

          .founders-sec .chips.y span {
            background: var(--yellow);
            color: #000;
          }

          .founders-sec .chips.b span {
            background: #2457ff;
            color: #fff;
          }

          .founders-sec .chips.show span {
            transform: none;
          }

          .founders-sec .chips span:hover {
            transform: translateY(-4px) rotate(-3deg) !important;
          }

          .founders-spk {
            position: fixed;
            z-index: 9999;
            width: 9px;
            height: 9px;
            pointer-events: none;
            background: var(--k);
            clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%);
            animation: spk-anim .8s forwards;
          }

          @keyframes spk-anim {
            to {
              transform: translate(var(--dx, 0px), var(--dy, 24px)) rotate(180deg) scale(0);
              opacity: 0;
            }
          }

          @media (max-width: 820px) {
            .founders-sec {
              grid-template-columns: 1fr;
              grid-template-areas: "eb" "t1" "p1" "t2" "p2";
            }
            .founders-sec .p1 {
              margin-top: 0;
            }
            .founders-sec .wave,
            .founders-sec .crown,
            .founders-sec .sp {
              display: none;
            }
            .founders-sec .t2 {
              padding-top: 10px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .founders-sec *,
            .founders-sec *::before,
            .founders-sec *::after {
              animation: none !important;
            }
            .founders-sec .photo,
            .founders-sec h2,
            .founders-sec .role,
            .founders-sec p.bio {
              opacity: 1;
            }
            .founders-sec .hl::before {
              transform: rotate(-1.5deg);
            }
            .founders-sec .wave path,
            .founders-sec .line path {
              stroke-dashoffset: 0;
            }
          }
        `}</style>

        {/* Decorative grain & blue polygon corners */}
        <div className="grain" aria-hidden="true" />
        <div className="corner c1" aria-hidden="true" />
        <div className="corner c2" aria-hidden="true" />

        {/* Kicker badge & interactive mode reset button */}
        <div className="eb">
          One Impact <span>/</span> Our Founders <i aria-hidden="true" />
          <button
            type="button"
            className="hint"
            onClick={(e) => {
              e.stopPropagation();
              focusFounder(activeFounder || 0);
            }}
          >
            {activeFounder ? "Show both ↺" : "Tap a founder ✦"}
          </button>
        </div>

        {/* Profile 1: Kartik Mittal Photo */}
        <div
          ref={p1Ref}
          className={`photo p1 ${activeFounder === 1 ? "on" : ""} ${
            activeFounder === 2 ? "dim" : ""
          }`}
          onClick={() => focusFounder(1)}
          onPointerMove={(e) => handlePhotoPointerMove(e, p1Ref.current)}
          onPointerLeave={() => handlePhotoPointerLeave(p1Ref.current)}
        >
          <Image
            alt="Kartik Mittal, partner and CEO of One Impact"
            src={kartikPortrait}
            unoptimized
            loading="eager"
            fetchPriority="low"
            placeholder="blur"
          />
        </div>

        {/* Profile 1: Text Block */}
        <div
          className="txt t1"
          onClick={() => focusFounder(1)}
        >
          <h1>
            Our <span className="hl">Founders.</span>
          </h1>
          <h2
            className={activeFounder === 2 ? "dim" : ""}
            style={{ "--d": "1s" } as React.CSSProperties}
          >
            Kartik Mittal
          </h2>
          <span
            className={`role ${activeFounder === 2 ? "dim" : ""}`}
            style={{ "--d": "1s" } as React.CSSProperties}
          >
            Partner &amp; CEO
          </span>
          <p
            className={`bio ${activeFounder === 2 ? "dim" : ""}`}
            style={{ "--d": "1s" } as React.CSSProperties}
          >
            Building smarter marketing systems through SEO, AI and digital strategy,
            with a focus on visibility, performance and sustainable business growth.
          </p>
          <div className={`chips y ${activeFounder === 1 ? "show" : ""}`}>
            <span style={{ "--k": 0 } as React.CSSProperties}>SEO</span>
            <span style={{ "--k": 1 } as React.CSSProperties}>AI</span>
            <span style={{ "--k": 2 } as React.CSSProperties}>Digital Strategy</span>
            <span style={{ "--k": 3 } as React.CSSProperties}>Visibility</span>
            <span style={{ "--k": 4 } as React.CSSProperties}>Performance</span>
            <span style={{ "--k": 5 } as React.CSSProperties}>Sustainable Growth</span>
          </div>
          <svg className={`line ${activeFounder === 2 ? "dim" : ""}`} viewBox="0 0 260 18" aria-hidden="true">
            <path stroke="#ffd60a" d="M4 12 C70 4 160 4 256 8" />
          </svg>
        </div>

        {/* Profile 2: Text Block */}
        <div
          className={`txt t2 ${activeFounder === 1 ? "dim" : ""}`}
          onClick={() => focusFounder(2)}
        >
          <h2 style={{ "--d": "1.4s" } as React.CSSProperties}>Kajol Chavan</h2>
          <span className="role" style={{ "--d": "1.4s" } as React.CSSProperties}>
            Co-Founder &amp; COO
          </span>
          <p className="bio" style={{ "--d": "1.4s" } as React.CSSProperties}>
            Bringing together business thinking, brand marketing and creative
            communication to turn ideas into meaningful digital experiences.
          </p>
          <div className={`chips b ${activeFounder === 2 ? "show" : ""}`}>
            <span style={{ "--k": 0 } as React.CSSProperties}>Business Thinking</span>
            <span style={{ "--k": 1 } as React.CSSProperties}>Brand Marketing</span>
            <span style={{ "--k": 2 } as React.CSSProperties}>Creative Communication</span>
            <span style={{ "--k": 3 } as React.CSSProperties}>Meaningful Experiences</span>
          </div>
          <svg className="line" viewBox="0 0 260 18" aria-hidden="true">
            <path stroke="#2457ff" d="M4 10 C70 4 160 4 256 8" />
          </svg>
        </div>

        {/* Profile 2: Kajol Chavan Photo */}
        <div
          ref={p2Ref}
          className={`photo p2 ${activeFounder === 2 ? "on" : ""} ${
            activeFounder === 1 ? "dim" : ""
          }`}
          onClick={() => focusFounder(2)}
          onPointerMove={(e) => handlePhotoPointerMove(e, p2Ref.current)}
          onPointerLeave={() => handlePhotoPointerLeave(p2Ref.current)}
        >
          <Image
            alt="Kajol Chavan, co-founder and COO of One Impact"
            src={kajolPortrait}
            unoptimized
            loading="eager"
            fetchPriority="low"
            placeholder="blur"
          />
        </div>

        {/* Decorative yellow wave & crown doodle */}
        <svg className="wave" viewBox="0 0 1000 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M200 70 C330 110 450 130 600 100 C760 70 880 40 980 70" />
        </svg>
        <svg
          className="crown"
          viewBox="0 0 70 60"
          fill="none"
          stroke="#f4f1ea"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={handleCrownClick}
          aria-label="Crown icon"
          role="img"
        >
          <path d="M6 46 10 12l16 18L36 6l10 24 16-18-4 34" />
          <path d="M12 54h42" />
        </svg>
        <svg className="sp" style={{ left: "41%", top: "12%" }} viewBox="0 0 60 60" aria-hidden="true">
          <path d="M10 50 24 16M26 56 44 26M44 54 56 40" />
        </svg>
        <svg
          className="sp"
          style={{ left: "60%", top: "50%", transform: "rotate(30deg)" }}
          viewBox="0 0 60 60"
          aria-hidden="true"
        >
          <path d="M6 40 50 30M10 54 46 50M16 22 40 10" />
        </svg>
      </section>
    </div>
  );
}

export default AboutFounders;
