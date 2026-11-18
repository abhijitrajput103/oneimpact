"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

// 12 Authentic One Impact clients from /LOGO/transparent/
const CLIENTS = [
  { name: "PayU", logo: "/LOGO/transparent/PayU.svg.webp" },
  { name: "DSP Mutual Fund", logo: "/LOGO/transparent/DSP Mutual fund.webp" },
  { name: "SnapDeal", logo: "/LOGO/transparent/sanpdealbrandlogo_2.webp" },
  { name: "SMAAASH", logo: "/LOGO/transparent/SMAAASH.webp" },
  { name: "Bloomberg Quint", logo: "/LOGO/transparent/bloomberg-quint-vector-logo.webp" },
  { name: "MOXIE Beauty", logo: "/LOGO/transparent/MOXIE Beauty.webp" },
  { name: "LenDen Club", logo: "/LOGO/transparent/LEDEN Clube.webp" },
  { name: "Axis Trustee", logo: "/LOGO/transparent/axistrustee.webp" },
  { name: "Sweet Bengal", logo: "/LOGO/transparent/SWEET BENGAL.webp" },
  { name: "DSCI", logo: "/LOGO/transparent/dsci.webp" },
  { name: "LiveLaw", logo: "/LOGO/transparent/livelaw-logo.webp" },
  { name: "Winston", logo: "/LOGO/transparent/winston-faridabad-ma84f9666c.webp" },
];

const SPARK_COLORS = ["#ffd60a", "#1b3dff", "#f4f1ea", "#ffd60a"];

export function AboutClients() {
  const stageRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<SVGSVGElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hintVisible, setHintVisible] = useState(true);

  // Spark burst helper
  const createSpark = useCallback((x: number, y: number, burst: boolean) => {
    if (typeof window === "undefined") return;
    const spark = document.createElement("i");
    spark.className = "about-spk";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
    spark.style.setProperty("--k", color);

    if (burst) {
      const a = -1.57 + (Math.random() - 0.5) * 2.4;
      const d = 80 + Math.random() * 150;
      spark.style.setProperty("--dx", `${Math.cos(a) * d}px`);
      spark.style.setProperty("--dy", `${Math.sin(a) * d}px`);
      const sz = 8 + Math.random() * 12;
      spark.style.width = `${sz}px`;
      spark.style.height = `${sz}px`;
    } else {
      spark.style.setProperty("--dx", `${Math.random() * 40 - 20}px`);
    }

    document.body.appendChild(spark);
    setTimeout(() => {
      spark.remove();
    }, 850);
  }, []);

  // Shout action trigger
  const handleShout = useCallback(() => {
    const mega = megaRef.current;
    const rays = raysRef.current;
    const grid = gridRef.current;

    if (mega) {
      mega.classList.remove("go");
      void mega.offsetWidth;
      mega.classList.add("go");

      const rect = mega.getBoundingClientRect();
      const originX = rect.left + rect.width * 0.78;
      const originY = rect.top + rect.height * 0.3;
      for (let i = 0; i < 30; i++) {
        createSpark(originX, originY, true);
      }
    }

    if (rays) {
      rays.classList.remove("go");
      void rays.getBoundingClientRect();
      rays.classList.add("go");
    }

    if (grid) {
      const cells = grid.querySelectorAll(".cell");
      cells.forEach((cell) => {
        cell.classList.remove("pop");
        void (cell as HTMLElement).offsetWidth;
        cell.classList.add("pop");
      });
    }

    setHintVisible(false);
  }, [createSpark]);

  // Crown click sparks
  const handleCrownClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      for (let i = 0; i < 24; i++) {
        createSpark(cx, cy, true);
      }
    },
    [createSpark]
  );

  // Cell click sparks
  const handleCellClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      for (let i = 0; i < 14; i++) {
        createSpark(cx, cy, true);
      }
    },
    [createSpark]
  );

  // Pointer move parallax for stage
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let lastTime = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3);
      const py = ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3);
      stage.style.setProperty("--px", px);
      stage.style.setProperty("--py", py);

      const now = Date.now();
      if (now - lastTime > 60) {
        lastTime = now;
        createSpark(e.clientX, e.clientY, false);
      }
    };

    stage.addEventListener("pointermove", onPointerMove);
    return () => {
      stage.removeEventListener("pointermove", onPointerMove);
    };
  }, [createSpark]);

  return (
    <section className="about-clients-sec relative w-full bg-[#070707] text-[#f4f1ea] overflow-hidden">
      <style jsx global>{`
        .about-clients-sec {
          --bg: #070707;
          --fg: #f4f1ea;
          --blue: #1b3dff;
          --yellow: #ffd60a;
          --paper: #ece8df;
          background-color: #070707;
          width: 100%;
        }

        .about-clients-sec .wrap {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* ── DESKTOP STAGE (>= 861px) — FULL WIDTH ── */
        @media (min-width: 861px) {
          .about-clients-sec .stage {
            position: relative;
            aspect-ratio: 1774 / 887;
            width: 100%;
            container-type: inline-size;
            --px: 0;
            --py: 0;
            overflow: hidden;
            background: #070707;
          }

          .about-clients-sec .ab {
            position: absolute;
          }

          .about-clients-sec .ov {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .about-clients-sec .eb {
            left: 4.4%;
            top: 4.6%;
            font-weight: 800;
            font-size: 1.05cqw;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 1.1cqw;
            z-index: 5;
            letter-spacing: 0.05em;
          }

          .about-clients-sec .eb i {
            width: 14.6cqw;
            height: 1px;
            background: #fff;
            opacity: 0.8;
          }

          .about-clients-sec .ttl {
            left: 5.2%;
            top: 14%;
            z-index: 6;
            margin: 0;
            font: italic 900 6.15cqw / 1.04 "Playfair Display", Georgia, serif;
            letter-spacing: -0.025em;
          }

          .about-clients-sec .ttl span {
            display: block;
            overflow: hidden;
            padding-right: 0.2em;
          }

          .about-clients-sec .ttl span > b {
            display: inline-block;
            font-weight: 900;
            transform: translateY(110%);
            animation: clientUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            animation-delay: calc(var(--i) * 0.12s);
          }

          .about-clients-sec .ttl .hl {
            overflow: visible;
            position: relative;
            z-index: 0;
            width: max-content;
            padding: 0 0.2em 0.02em 0.12em;
            margin-left: -0.12em;
            color: #0a0a0a;
          }

          .about-clients-sec .ttl .hl::before {
            content: "";
            position: absolute;
            inset: 0.1em -0.06em 0.02em -0.05em;
            background: var(--yellow);
            z-index: -1;
            transform: rotate(-1deg) scaleX(0);
            transform-origin: left;
            animation: clientWipe 0.7s 0.7s cubic-bezier(0.7, 0, 0.2, 1) forwards;
            clip-path: polygon(
              0 18%,
              3% 4%,
              2% 40%,
              5% 0,
              100% 8%,
              98% 32%,
              100% 58%,
              97% 80%,
              100% 100%,
              50% 94%,
              8% 100%,
              2% 84%,
              0 60%
            );
          }

          .about-clients-sec .ul {
            left: 15.2%;
            top: 52.6%;
            width: 20%;
            height: 2cqw;
            z-index: 6;
          }

          .about-clients-sec .sub {
            left: 5.6%;
            top: 58.2%;
            width: 32%;
            z-index: 6;
            margin: 0;
            font-size: 1.5cqw;
            line-height: 1.35;
            color: #ecebe6;
            font-weight: 500;
          }

          .about-clients-sec .board-wrapper {
            position: absolute;
            left: 38.6%;
            top: 13%;
            width: 56.1%;
            height: 75.5%;
            z-index: 4;
            transform: translate(calc(var(--px) * -6px), calc(var(--py) * -6px));
            transition: transform 0.2s ease-out;
          }

          .about-clients-sec .board {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background: var(--paper);
            clip-path: polygon(
              0 6%,
              3% 2%,
              10% 4%,
              22% 1%,
              35% 3%,
              50% 0,
              64% 3%,
              78% 1%,
              90% 4%,
              98% 2%,
              100% 20%,
              99% 40%,
              100% 60%,
              98% 78%,
              100% 92%,
              92% 98%,
              70% 100%,
              52% 96%,
              30% 100%,
              12% 97%,
              4% 100%,
              1% 80%,
              0 55%,
              2% 30%
            );
            animation: clientBin 0.9s cubic-bezier(0.2, 0.9, 0.2, 1) both;
          }

          .about-clients-sec .grid {
            position: absolute;
            left: 8.5%;
            top: 12%;
            width: 84.5%;
            height: 74.5%;
            z-index: 7;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }

          .about-clients-sec .t1 {
            position: absolute;
            left: 42.3%;
            top: 9.9%;
            width: 9.9%;
            height: 11.5%;
            transform: rotate(-8deg) skewX(-6deg);
            z-index: 9;
          }

          .about-clients-sec .t2 {
            position: absolute;
            left: 78.6%;
            top: 77.7%;
            width: 15%;
            height: 14%;
            transform: rotate(-8deg);
            clip-path: polygon(0 8%, 100% 0, 98% 100%, 3% 92%);
            z-index: 9;
          }

          .about-clients-sec .crown {
            position: absolute;
            left: 87.3%;
            top: 6.6%;
            width: 5.8%;
            z-index: 9;
            pointer-events: auto;
            cursor: pointer;
            animation: clientWob 3s ease-in-out infinite;
          }

          .about-clients-sec .mega {
            left: 16.9%;
            top: 66%;
            width: 23.1%;
            height: 34%;
            z-index: 13;
            mix-blend-mode: lighten;
            cursor: pointer;
            transform-origin: 70% 40%;
            transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1);
          }

          .about-clients-sec .rays {
            z-index: 12;
            transform-origin: 42% 80%;
          }

          .about-clients-sec .hint {
            left: 5.6%;
            bottom: 6%;
            z-index: 14;
            font-weight: 800;
            font-size: 0.95cqw;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #000;
            background: var(--yellow);
            padding: 0.6cqw 1.2cqw;
            border-radius: 99px;
            cursor: pointer;
            border: 0;
            animation: clientPl 2s ease-in-out infinite;
          }

          .about-clients-sec .cell:hover,
          .about-clients-sec .cell:focus-visible {
            opacity: 1;
            transform: translateY(-0.8cqw) rotate(-2deg) scale(1.12);
            background: var(--yellow);
            z-index: 5;
            box-shadow: 0.6cqw 1cqw 0 rgba(0, 0, 0, 0.85);
            border-radius: 0.4cqw;
          }

          .about-clients-sec .cell:nth-child(even):hover {
            background: var(--blue);
            transform: translateY(-0.8cqw) rotate(0deg) scale(1.12);
          }

          .about-clients-sec .tg {
            position: absolute;
            left: 50%;
            top: -1.2cqw;
            transform: translateX(-50%) rotate(-3deg);
            background: #0a0a0a;
            color: #fff;
            font: 800 0.85cqw "Manrope", sans-serif;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 0.35cqw 0.8cqw;
            border-radius: 99px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
          }

          .about-clients-sec .mobile-shout-bar {
            display: none;
          }
        }

        /* ── MOBILE RESPONSIVE LAYOUT (<= 860px) ── */
        @media (max-width: 860px) {
          .about-clients-sec .wrap {
            padding: 24px clamp(16px, 4vw, 32px) 36px;
          }

          .about-clients-sec .stage {
            display: flex;
            flex-direction: column;
            gap: 22px;
            position: relative;
            background: #070707;
          }

          .about-clients-sec .ov.blue,
          .about-clients-sec .rays,
          .about-clients-sec .ab.mega,
          .about-clients-sec .ab.hint {
            display: none !important;
          }

          .about-clients-sec .eb {
            font-weight: 800;
            font-size: 13px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 12px;
            letter-spacing: 0.05em;
          }

          .about-clients-sec .eb i {
            width: 70px;
            height: 1px;
            background: #fff;
            opacity: 0.8;
          }

          .about-clients-sec .ttl {
            font: italic 900 clamp(36px, 8.5vw, 54px) / 1.05 "Playfair Display", Georgia, serif;
            letter-spacing: -0.025em;
            margin: 0;
          }

          .about-clients-sec .ttl span {
            display: block;
          }

          .about-clients-sec .ttl span > b {
            display: inline-block;
          }

          .about-clients-sec .ttl .hl {
            display: inline-block;
            position: relative;
            color: #0a0a0a;
            padding: 2px 8px 3px 6px;
            margin-top: 4px;
          }

          .about-clients-sec .ttl .hl::before {
            content: "";
            position: absolute;
            inset: 2px -4px;
            background: var(--yellow);
            z-index: -1;
            clip-path: polygon(
              0 18%,
              3% 4%,
              2% 40%,
              5% 0,
              100% 8%,
              98% 32%,
              100% 58%,
              97% 80%,
              100% 100%,
              50% 94%,
              8% 100%,
              2% 84%,
              0 60%
            );
          }

          .about-clients-sec .ul {
            width: 170px;
            height: 16px;
            margin: -8px 0 6px 6px;
          }

          .about-clients-sec .sub {
            font-size: 15px;
            line-height: 1.55;
            color: #ecebe6;
            margin: 0;
            max-width: 520px;
          }

          /* Interactive Mobile Megaphone Banner */
          .about-clients-sec .mobile-shout-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 18px;
            padding: 12px 16px;
            margin: 4px 0 10px;
          }

          .about-clients-sec .mobile-mega-btn {
            display: flex;
            align-items: center;
            gap: 12px;
            background: transparent;
            border: 0;
            color: #f4f1ea;
            cursor: pointer;
            padding: 0;
          }

          .about-clients-sec .mobile-mega-img {
            width: 56px;
            height: 56px;
            position: relative;
            flex-shrink: 0;
            mix-blend-mode: lighten;
          }

          .about-clients-sec .mobile-mega-btn:hover .mobile-mega-img {
            transform: scale(1.08) rotate(-4deg);
          }

          .about-clients-sec .mobile-hint-badge {
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #000;
            background: var(--yellow);
            padding: 8px 16px;
            border-radius: 99px;
            white-space: nowrap;
            animation: clientPl 2s ease-in-out infinite;
          }

          /* Paper Board on Mobile */
          .about-clients-sec .board-wrapper {
            position: relative;
            width: 100%;
            margin-top: 10px;
          }

          .about-clients-sec .board {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background: var(--paper);
            clip-path: polygon(
              0 3%,
              3% 1%,
              10% 2%,
              22% 0.5%,
              35% 1.5%,
              50% 0,
              64% 1.5%,
              78% 0.5%,
              90% 2%,
              98% 1%,
              100% 10%,
              99% 25%,
              100% 50%,
              98% 75%,
              100% 95%,
              92% 99%,
              70% 100%,
              52% 98%,
              30% 100%,
              12% 98.5%,
              4% 100%,
              1% 90%,
              0 50%,
              2% 20%
            );
          }

          .about-clients-sec .grid {
            position: relative;
            z-index: 5;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            padding: 34px 14px 38px;
          }

          .about-clients-sec .t1 {
            position: absolute;
            left: 16px;
            top: -12px;
            width: 80px;
            height: 28px;
            transform: rotate(-6deg);
            z-index: 10;
          }

          .about-clients-sec .t2 {
            position: absolute;
            right: 16px;
            bottom: -12px;
            width: 95px;
            height: 28px;
            transform: rotate(-5deg);
            z-index: 10;
          }

          .about-clients-sec .crown {
            position: absolute;
            right: 20px;
            top: -24px;
            width: 40px;
            height: 36px;
            z-index: 12;
            cursor: pointer;
            animation: clientWob 3s ease-in-out infinite;
          }

          .about-clients-sec .cell:hover,
          .about-clients-sec .cell:focus-visible {
            transform: scale(1.06);
            background: var(--yellow);
            border-radius: 6px;
            z-index: 5;
          }

          .about-clients-sec .cell:nth-child(even):hover {
            background: var(--blue);
          }

          .about-clients-sec .tg {
            position: absolute;
            left: 50%;
            top: -18px;
            transform: translateX(-50%);
            background: #0a0a0a;
            color: #fff;
            font: 800 10px "Manrope", sans-serif;
            padding: 2px 7px;
            border-radius: 99px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
          }
        }

        /* ── SHARED STYLES ACROSS BREAKPOINTS ── */
        .about-clients-sec .ul path,
        .about-clients-sec .dr {
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: clientDr 1.2s 1.3s ease-out forwards;
        }

        .about-clients-sec .board::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(60% 60% at 30% 20%, rgba(255, 255, 255, 0.5), transparent),
            repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.015) 0 2px, transparent 2px 4px);
          pointer-events: none;
        }

        .about-clients-sec .cell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
          cursor: pointer;
          margin: 0;
          padding: 8px 12px;
          min-height: 52px;
          transition: transform 0.35s cubic-bezier(0.3, 1.6, 0.4, 1), background 0.25s, opacity 0.3s,
            box-shadow 0.3s;
          outline: 0;
          opacity: 0;
          animation: clientCin 0.6s forwards;
          animation-delay: calc(0.8s + var(--k) * 0.05s);
        }

        .about-clients-sec .cell::before {
          content: "";
          position: absolute;
          right: 0;
          top: 12%;
          bottom: 12%;
          width: 1px;
          background: rgba(0, 0, 0, 0.2);
        }

        .about-clients-sec .cell:nth-child(3n)::before {
          display: none;
        }

        .about-clients-sec .cell::after {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 0;
          height: 1px;
          background: rgba(0, 0, 0, 0.18);
        }

        .about-clients-sec .cell:nth-child(n + 10)::after {
          display: none;
        }

        .about-clients-sec .cell img {
          display: block;
          max-width: 82%;
          max-height: 48px;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: filter 0.25s, transform 0.35s cubic-bezier(0.3, 1.6, 0.4, 1);
        }

        .about-clients-sec .grid:hover .cell {
          opacity: 0.38;
        }

        .about-clients-sec .grid .cell:hover {
          opacity: 1;
        }

        .about-clients-sec .cell:nth-child(even):hover img {
          filter: brightness(0) invert(1);
        }

        .about-clients-sec .cell:hover img {
          transform: scale(1.06);
        }

        .about-clients-sec .cell:hover::before,
        .about-clients-sec .cell:hover::after {
          opacity: 0;
        }

        .about-clients-sec .cell[data-n]:hover .tg {
          opacity: 1;
        }

        .about-clients-sec .cell.pop {
          animation: clientPop 0.6s cubic-bezier(0.3, 1.7, 0.4, 1) both;
          animation-delay: calc(var(--k) * 0.05s);
        }

        .about-clients-sec .tape {
          background: var(--yellow);
          opacity: 0.96;
        }

        .about-clients-sec .mega img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .about-clients-sec .mega:hover {
          transform: rotate(-4deg) scale(1.05);
        }

        .about-clients-sec .mega.go {
          animation: clientShake 0.5s;
        }

        .about-clients-sec .rays polygon {
          fill: var(--yellow);
          transform-origin: 675px 710px;
          animation: clientRay 2.4s ease-in-out infinite;
        }

        .about-clients-sec .rays polygon:nth-child(2) {
          animation-delay: 0.2s;
        }

        .about-clients-sec .rays polygon:nth-child(3) {
          animation-delay: 0.4s;
        }

        .about-clients-sec .rays.go polygon {
          animation: clientBlast 0.7s ease-out;
        }

        /* Spark particle animation */
        .about-spk {
          position: fixed;
          z-index: 9999;
          width: 9px;
          height: 9px;
          pointer-events: none;
          background: var(--k, #ffd60a);
          clip-path: polygon(
            50% 0,
            62% 38%,
            100% 50%,
            62% 62%,
            50% 100%,
            38% 62%,
            0 50%,
            38% 38%
          );
          animation: clientSpk 0.8s forwards;
        }

        @keyframes clientUp {
          to {
            transform: none;
          }
        }

        @keyframes clientWipe {
          to {
            transform: rotate(-1deg) scaleX(1);
          }
        }

        @keyframes clientDr {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes clientBin {
          from {
            opacity: 0;
            transform: translateY(50px) rotate(2deg);
          }
        }

        @keyframes clientCin {
          to {
            opacity: 1;
          }
        }

        @keyframes clientPop {
          0% {
            transform: scale(0.4) rotate(-10deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.2) rotate(3deg);
            opacity: 1;
          }
          100% {
            transform: none;
            opacity: 1;
          }
        }

        @keyframes clientWob {
          50% {
            transform: rotate(-6deg) translateY(-4px);
          }
        }

        @keyframes clientShake {
          20% {
            transform: rotate(-6deg) scale(1.08);
          }
          40% {
            transform: rotate(3deg) scale(1.05);
          }
          60% {
            transform: rotate(-3deg);
          }
        }

        @keyframes clientRay {
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes clientBlast {
          40% {
            transform: scale(1.5);
          }
        }

        @keyframes clientPl {
          50% {
            box-shadow: 0 0 0 8px rgba(255, 214, 10, 0.25);
          }
        }

        @keyframes clientSpk {
          to {
            transform: translate(var(--dx, 0px), var(--dy, 24px)) rotate(180deg) scale(0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-clients-sec * {
            animation: none !important;
          }
          .about-clients-sec .cell,
          .about-clients-sec .board {
            opacity: 1;
          }
          .about-clients-sec .hl::before {
            transform: rotate(-1deg);
          }
          .about-clients-sec .dr {
            stroke-dashoffset: 0;
          }
          .about-clients-sec .ttl span > b {
            transform: none;
          }
        }
      `}</style>

      <div className="wrap">
        <div ref={stageRef} className="stage">
          {/* Blue decorative background accent polygon (Desktop) */}
          <svg className="ov blue" viewBox="0 0 1774 887" preserveAspectRatio="none" aria-hidden="true">
            <polygon fill="#1b3dff" points="1140,125 1215,85 1235,60 1320,28 1440,0 1550,0 1500,45 1460,75 1420,125" />
            <polygon
              fill="#1b3dff"
              points="705,478 760,620 745,690 880,772 840,812 700,850 560,887 150,887 330,830 560,740 650,630 690,540"
            />
            <polyline fill="none" stroke="#f2efe8" strokeWidth="5" points="1145,128 1215,88 1240,64 1330,30 1440,4 1545,2" />
            <polyline fill="none" stroke="#f2efe8" strokeWidth="5" points="150,887 200,872 330,836 470,790 560,744" />
          </svg>

          {/* Eyebrow kicker */}
          <div className="ab eb">
            <span>One Impact</span>
            <span>/</span>
            <span>Our Clients</span>
            <i aria-hidden="true" />
          </div>

          {/* Editorial Display Heading with yellow highlighter sweep */}
          <h2 className="ab ttl">
            <span>
              <b style={{ ["--i" as string]: 0 }}>Brands</b>
            </span>
            <span>
              <b style={{ ["--i" as string]: 1 }}>That Trust</b>
            </span>
            <span className="hl">
              <b style={{ ["--i" as string]: 2 }}>Our Impact.</b>
            </span>
          </h2>

          {/* Blue underline squiggle */}
          <svg className="ab ul" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
            <path className="dr" stroke="#1b3dff" strokeWidth="9" d="M6 12C70 5 190 4 294 9" />
          </svg>

          {/* Subtitle description */}
          <p className="ab sub">
            From ambitious startups to category leaders, we partner with brands that believe in the power of thoughtful,
            high-impact marketing.
          </p>

          {/* Mobile Shout Bar */}
          <div className="mobile-shout-bar">
            <button className="mobile-mega-btn" onClick={handleShout} aria-label="Shout brand impact">
              <div className="mobile-mega-img">
                <Image src="/images/megaphone-v2.png" alt="Megaphone" width={56} height={56} />
              </div>
              <span className="font-extrabold text-sm tracking-wide">Sound the Horn</span>
            </button>
            <button className="mobile-hint-badge" onClick={handleShout}>
              Tap to shout 📣
            </button>
          </div>

          {/* Yellow spark doodle accents (Desktop) */}
          <svg className="ov hidden md:block" style={{ zIndex: 6 }} viewBox="0 0 1774 887" preserveAspectRatio="none" aria-hidden="true">
            <g className="dr" style={{ animationDelay: "0.9s" }} stroke="#ffd60a" strokeWidth="6" fill="none">
              <path d="M592 170 640 193M633 142 658 177M598 218 636 217" />
            </g>
          </svg>

          {/* Ripped Paper Board & 12-Client Grid Wrapper */}
          <div className="board-wrapper">
            {/* Ripped Paper Texture Board */}
            <div className="board" aria-hidden="true" />

            {/* 12-cell Client Logo Grid */}
            <div ref={gridRef} className="grid" id="grid">
              {CLIENTS.map((client, idx) => (
                <button
                  key={client.name}
                  className="cell"
                  data-n={client.name}
                  style={{ ["--k" as string]: idx }}
                  aria-label={client.name}
                  onClick={handleCellClick}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                  />
                  <span className="tg">{client.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Yellow Tape Stickers */}
          <div className="t1 tape" aria-hidden="true" />
          <div className="t2 tape" aria-hidden="true" />

          {/* Crown doodle (interactive spark burst) */}
          <svg
            className="crown"
            viewBox="0 0 100 85"
            fill="none"
            stroke="#ffd60a"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleCrownClick}
            role="button"
            tabIndex={0}
            aria-label="Interactive crown doodle — click for sparks!"
          >
            <path d="M6 76 14 14l26 28L52 6l16 36 28-28-4 62zM18 82h68" />
          </svg>

          {/* Megaphone Sound Blast Rays (Desktop) */}
          <svg ref={raysRef} className="ov rays" viewBox="0 0 1774 887" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="668,705 755,603 722,682" />
            <polygon points="678,725 788,712 690,748" />
            <polygon points="695,758 750,800 705,780" />
          </svg>

          {/* Interactive Megaphone (Desktop) */}
          <div
            ref={megaRef}
            className="ab mega"
            title="Click to Shout!"
            onClick={handleShout}
            role="button"
            tabIndex={0}
            aria-label="Interactive Megaphone — shout brand impact!"
          >
            <Image
              src="/images/megaphone-v2.png"
              alt="Megaphone"
              width={400}
              height={300}
              priority={false}
            />
          </div>

          {/* Floating hint CTA button (Desktop) */}
          {hintVisible && (
            <button className="ab hint" onClick={handleShout}>
              Click the megaphone 📣
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutClients;
