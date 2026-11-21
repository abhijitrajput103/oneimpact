"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, PointerEvent, ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/common/Navbar";
import styles from "./ContactExperience.module.css";

// EDIT THESE VALUES BEFORE LAUNCH. Demo values are not business verification.
const DETAILS = {
  email: "hello@oneimpact.in",
  city: "Mumbai, India",
  phone: "", // Add the verified public phone number, if desired.
  streetAddress: "", // Add the verified street address before enabling directions.
  mapUrl: "", // Add a verified Google Maps link.
  linkedIn: "",
  instagram: "",
  youtube: "",
  behance: "",
};

const SERVICES = [
  "SEO Services",
  "Social Media Marketing",
  "Influencer Marketing",
  "Branding",
  "Web Development",
];

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We work across SEO, social media marketing, influencer marketing, branding, and web development. Tell us the challenge and we can explore the right mix.",
  },
  {
    question: "How can I start a project?",
    answer:
      "Send a short brief through the form or email us. Share your goals, timeline, and what you need help with so we can start a useful conversation.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We welcome enquiries from growing teams and established brands alike. The best place to start is with your goals and priorities.",
  },
  {
    question: "Can we discuss a single service?",
    answer:
      "Absolutely. You can ask about one specific discipline or discuss a broader project involving several services.",
  },
];

type GlyphName = "mail" | "phone" | "pin" | "bolt" | "handshake" | "chart" | "clock";

function Glyph({ name, size = 25 }: { name: GlyphName; size?: number }) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  if (name === "mail")
    return <svg {...shared}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>;
  if (name === "phone")
    return <svg {...shared}><path d="M5.1 3.7h3.5l1.4 4.2-2.1 1.8a15.5 15.5 0 0 0 6.4 6.4l1.8-2.1 4.2 1.4v3.5c0 1-.8 1.8-1.8 1.8A16.2 16.2 0 0 1 3.3 5.5c0-1 .8-1.8 1.8-1.8Z"/></svg>;
  if (name === "pin")
    return <svg {...shared}><path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  if (name === "bolt")
    return <svg {...shared} fill="currentColor" stroke="none"><path d="m14 1-11 13h8l-1 9 11-13h-8l1-9Z"/></svg>;
  if (name === "handshake")
    return <svg {...shared}><path d="m2 8 4-3 5 2 2-1 5 2 4-2"/><path d="M6 11 10 15l2-1 2 2 2-1 3-4M6 8 3 11m16-3 2 3M9 7l3 2 3-1M8 14l3 4 2-1m1-1 2 2"/></svg>;
  if (name === "chart")
    return <svg {...shared}><path d="M3 21V4M3 21h18M7 18v-6h3v6M12 18V9h3v9M17 18V5h3v13" /><path d="m6 9 5-5 4 2 5-5"/></svg>;
  return <svg {...shared}><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>;
}

function MagneticButton({
  children,
  href,
  className = "",
  disabled = false,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  function move(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--magX", `${((e.clientX - rect.left) / rect.width - .5) * 10}px`);
    el.style.setProperty("--magY", `${((e.clientY - rect.top) / rect.height - .5) * 8}px`);
  }
  function reset(e: PointerEvent<HTMLElement>) {
    e.currentTarget.style.setProperty("--magX", "0px");
    e.currentTarget.style.setProperty("--magY", "0px");
  }
  const classes = `${styles.action} ${className}`;
  if (href)
    return <a className={classes} href={href} onPointerMove={move} onPointerLeave={reset}>{children}<span className={styles.actionArrow} aria-hidden>↗</span></a>;
  return <button className={classes} type={type} disabled={disabled} onPointerMove={move} onPointerLeave={reset}>{children}<span className={styles.actionArrow} aria-hidden>↗</span></button>;
}

function TiltSurface({
  children,
  className = "",
  maxX = 3,
  maxY = 4,
}: {
  children: ReactNode;
  className?: string;
  maxX?: number;
  maxY?: number;
}) {
  function move(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const b = el.getBoundingClientRect();
    const rx = ((e.clientY - b.top) / b.height - .5) * -maxX * 2;
    const ry = ((e.clientX - b.left) / b.width - .5) * maxY * 2;
    el.style.setProperty("--tiltX", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--tiltY", `${ry.toFixed(2)}deg`);
  }
  function leave(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.style.setProperty("--tiltX", "0deg");
    e.currentTarget.style.setProperty("--tiltY", "0deg");
  }
  return <div className={`${styles.tilt} ${className}`} onPointerMove={move} onPointerLeave={leave}>{children}</div>;
}

type FormValues = { name: string; email: string; service: string; message: string; website: string };
const EMPTY_FORM: FormValues = { name: "", email: "", service: "", message: "", website: "" };

function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [tried, setTried] = useState(false);
  const invalid = {
    name: values.name.trim().length < 2,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()),
    service: !SERVICES.includes(values.service),
    message: values.message.trim().length < 10,
  };
  function update(key: keyof FormValues, val: string) {
    setValues(prev => ({ ...prev, [key]: val }));
    setError("");
    if (status === "error") setStatus("idle");
  }
  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTried(true);
    if (Object.values(invalid).some(Boolean) || status === "sending") return;
    setStatus("sending");
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: controller.signal,
      });
      if (!response.ok) {
        const data: { error?: string } = await response.json().catch(() => ({}));
        throw new Error(data.error || "Your message could not be sent. Please try again.");
      }
      setStatus("sent");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error && cause.name === "AbortError"
        ? "The request timed out. Please try again or email us."
        : cause instanceof Error ? cause.message : "Please try again or email us.");
    } finally {
      window.clearTimeout(timeout);
    }
  }
  return (
    <TiltSurface className={styles.formPaper}>
      <form className={styles.form} onSubmit={send} noValidate aria-label="Contact One Impact">
        {status === "sent" ? (
          <div className={styles.success} role="status">
            <span className={styles.successIcon} aria-hidden>✓</span>
            <h2>Message received.</h2>
            <p>Thank you for reaching out. We’ll review your enquiry and reply as soon as we can.</p>
            <button type="button" className={styles.reset} onClick={() => {setValues(EMPTY_FORM); setStatus("idle"); setTried(false);}}>Write another message ↗</button>
          </div>
        ) : (
          <>
            <span className={styles.smallKicker}>YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Send Us a Message<span className={styles.inkStar} aria-hidden>✳</span></h2>
            <p className={styles.formIntro}>Tell us what you&apos;re working on. We’d love to hear the story.</p>
            <label className={styles.visuallyHidden} htmlFor="oi-name">Your name</label>
            <input id="oi-name" name="name" autoComplete="name" placeholder="Your Name *" value={values.name} onChange={e=>update("name", e.target.value)} aria-invalid={tried && invalid.name} aria-describedby={tried && invalid.name ? "oi-name-error" : undefined}/>
            {tried && invalid.name && <small id="oi-name-error" className={styles.fieldError}>Enter your name (at least 2 characters).</small>}
            <label className={styles.visuallyHidden} htmlFor="oi-email">Work email</label>
            <input id="oi-email" name="email" type="email" autoComplete="email" placeholder="Work Email *" value={values.email} onChange={e=>update("email", e.target.value)} aria-invalid={tried && invalid.email} aria-describedby={tried && invalid.email ? "oi-email-error" : undefined}/>
            {tried && invalid.email && <small id="oi-email-error" className={styles.fieldError}>Enter a valid email address.</small>}
            <label className={styles.visuallyHidden} htmlFor="oi-service">Select a service</label>
            <select id="oi-service" value={values.service} onChange={e=>update("service", e.target.value)} aria-invalid={tried && invalid.service} aria-describedby={tried && invalid.service ? "oi-service-error" : undefined}>
              <option value="">Select Service *</option>
              {SERVICES.map(service => <option key={service} value={service}>{service}</option>)}
            </select>
            {tried && invalid.service && <small id="oi-service-error" className={styles.fieldError}>Please choose a service.</small>}
            <label className={styles.visuallyHidden} htmlFor="oi-message">Tell us about your project</label>
            <textarea id="oi-message" name="message" placeholder="Your Message *" rows={4} value={values.message} onChange={e=>update("message", e.target.value)} aria-invalid={tried && invalid.message} aria-describedby={tried && invalid.message ? "oi-message-error" : undefined}/>
            {tried && invalid.message && <small id="oi-message-error" className={styles.fieldError}>Add a little more detail (at least 10 characters).</small>}
            <div className={styles.honeypot} aria-hidden="true"><label htmlFor="oi-website">Website</label><input id="oi-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={e=>update("website",e.target.value)}/></div>
            {error && <p className={styles.submitError} role="alert">{error}{" "}<a href={`mailto:${DETAILS.email}`}>Email us instead.</a></p>}
            <MagneticButton type="submit" disabled={status === "sending"} className={styles.submit}>{status === "sending" ? "Sending…" : "Send Message"}</MagneticButton>
            <p className={styles.privacyNote}>We’ll use your details only to respond to this enquiry.</p>
          </>
        )}
      </form>
    </TiltSurface>
  );
}

function FaqList() {
  const [active, setActive] = useState<number | null>(null);
  return <div className={styles.questions}>
    {FAQS.map((entry, index) => (
      <div key={entry.question} className={`${styles.faqItem} ${active === index ? styles.faqOpen : ""}`}>
        <h3>
          <button type="button" aria-expanded={active === index} aria-controls={`oi-faq-${index}`} id={`oi-faq-button-${index}`} onClick={() => setActive(active === index ? null : index)}>
            <span>{entry.question}</span><span className={styles.plus} aria-hidden>+</span>
          </button>
        </h3>
        <div className={styles.faqAnswer} id={`oi-faq-${index}`} role="region" aria-labelledby={`oi-faq-button-${index}`} aria-hidden={active !== index}><div><p>{entry.answer}</p></div></div>
      </div>
    ))}
  </div>;
}

export default function ContactExperience({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = pageRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = node.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {entry.target.classList.add(styles.visible); observer.unobserve(entry.target);}
      }), { threshold: 0.12, rootMargin: "0px 0px -20px 0px" }
    );
    node.dataset.motion = "on";
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <Navbar />

      <main ref={pageRef} className={`${styles.page} flex-grow pt-20 sm:pt-24`} id="top">
        <section className={styles.hero} id="contact" aria-labelledby="oi-hero-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{"// GET IN TOUCH"}</p>
            <h1 id="oi-hero-title" className={styles.heroTitle}>Let’s Create <span className={styles.titleBottom}><mark>Impact</mark> Together.</span></h1>
            <p className={styles.heroDescription}>Have a project in mind, a question, or simply an idea worth exploring? We’d love to hear from you.</p>
            <div className={styles.contacts}>
              {DETAILS.phone && <a href={`tel:${DETAILS.phone.replace(/\s/g,"")}`} className={styles.contactTile}><Glyph name="phone"/><strong>{DETAILS.phone}</strong><span>Call us</span></a>}
              <a href={`mailto:${DETAILS.email}`} className={styles.contactTile}><Glyph name="mail"/><strong>{DETAILS.email}</strong><span>Drop us an email</span></a>
              <div className={styles.contactTile}><Glyph name="pin"/><strong>{DETAILS.city}</strong><span>Studio visits by appointment</span></div>
            </div>
            <div className={styles.socialRow}>
              {[
                ["LinkedIn", DETAILS.linkedIn, "in"],
                ["Instagram", DETAILS.instagram, "◎"],
                ["YouTube", DETAILS.youtube, "▶"],
                ["Behance", DETAILS.behance, "Bē"],
              ].filter((item) => item[1]).map(([name, href, glyph]) =>
                <a href={href} className={styles.social} aria-label={name} key={name} target="_blank" rel="noopener noreferrer">{glyph}</a>
              )}
              <span className={styles.socialNote}>THINK IT. SHARE IT. MAKE IT REAL.</span>
            </div>
          </div>

          <div className={styles.heroRight} id="contact-form">
            <div className={styles.phoneArt}>
              <div className={styles.yellowRay} aria-hidden>✳</div>
              <Image src="/oneimpact-contact/phone-envelope.webp" alt="Editorial collage featuring a vintage telephone and envelope" width={620} height={1106} unoptimized fetchPriority="high" loading="eager"/>
            </div>
            <div data-reveal className={styles.formPosition}><ContactForm/></div>
          </div>
        </div>
      </section>

      <div className={`${styles.tear} ${styles.tearOne}`} aria-hidden="true"/>
      <section className={styles.expect} aria-labelledby="oi-expect-heading">
        <div className={`${styles.container} ${styles.expectGrid}`}>
          <TiltSurface className={styles.expectNote}>
            <div className={styles.noteContent} data-reveal><h2 id="oi-expect-heading">What to Expect<span className={styles.titleDot}>?</span></h2>
              <p>We’re here to listen, collaborate, and turn thoughtful ideas into meaningful creative work. Here&apos;s how we approach every conversation.</p>
            </div>
          </TiltSurface>
          <div className={styles.featureGrid}>
            <div className={styles.feature} data-reveal><Glyph name="bolt" size={48}/><strong>Thoughtful</strong><span>First Response</span></div>
            <div className={styles.feature} data-reveal><Glyph name="handshake" size={52}/><strong>Collaborative</strong><span>Approach</span></div>
            <div className={styles.feature} data-reveal><Glyph name="chart" size={52}/><strong>Results-Driven</strong><span>Thinking</span></div>
          </div>
        </div>
      </section>

      <div className={`${styles.tear} ${styles.tearTwo}`} aria-hidden="true"/>
      <section className={styles.office} aria-labelledby="oi-office-title">
        <div className={`${styles.container} ${styles.officeGrid}`}>
          <div className={styles.officePhoto} data-reveal>
            <div className={styles.tape} aria-hidden="true"/>
            <Image src="/oneimpact-contact/office-sample.webp" alt="Illustrative studio interior — replace with a real One Impact office photograph" width={820} height={580}/>
            <span className={styles.photoCaption}>STUDIO IMAGE / REPLACE BEFORE LAUNCH</span>
          </div>
          <div className={styles.officeCopy} data-reveal>
            <p className={styles.eyebrow}>{"// FIND YOUR WAY TO US"}</p>
            <h2 id="oi-office-title">Visit Our <span>Office</span></h2>
            <p>Good ideas are even better over a conversation. Reach out to arrange a visit.</p>
            <div className={styles.officeDetail}><Glyph name="pin"/><span>{DETAILS.streetAddress || DETAILS.city}<small>{!DETAILS.streetAddress && "Exact address available on request"}</small></span></div>
            <div className={styles.officeDetail}><Glyph name="clock"/><span>Visits by appointment</span></div>
            {DETAILS.mapUrl && <a className={styles.textLink} href={DETAILS.mapUrl} target="_blank" rel="noopener noreferrer">Get directions ↗</a>}
          </div>
          <div className={styles.mapWrap} data-reveal>
            {DETAILS.mapUrl
              ? <a href={DETAILS.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapFrame} aria-label="Open One Impact office in maps"><Image src="/oneimpact-contact/map-sample.webp" alt="Map preview (replace with verified location)" width={600} height={562}/><span>Open in Maps ↗</span></a>
              : <div className={styles.mapFrame}><Image src="/oneimpact-contact/map-sample.webp" alt="Illustrative map artwork, not an actual office location" width={600} height={562}/><span className={styles.mapPlaceholder}>ILLUSTRATIVE MAP</span></div>}
          </div>
        </div>
      </section>

      <section className={styles.faqAndCta} aria-label="FAQ and project enquiry">
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div className={styles.faqPanel} data-reveal>
            <div className={styles.faqContent}>
              <p className={styles.eyebrow}>{"// BEFORE YOU SAY HELLO"}</p>
              <h2>Frequently Asked <span>Questions</span></h2>
              <FaqList/>
            </div>
          </div>
          <div className={styles.ctaPanel} data-reveal>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrow}>{"// STILL HAVE QUESTIONS?"}</p>
              <h2>Let’s <em>Talk.</em></h2>
              <p>Drop us a message. Let’s turn a new conversation into something worth making.</p>
              <MagneticButton href="#contact-form">Contact Us</MagneticButton>
              <span className={styles.ctaGraphic} aria-hidden>↗</span>
            </div>
          </div>
        </div>
      </section>
      </main>

      {children}
    </div>
  );
}
