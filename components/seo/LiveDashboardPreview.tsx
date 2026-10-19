"use client";

import React, { useState } from "react";

interface KeywordRow {
  keyword: string;
  url: string;
  clicks: string;
  position: string;
  change?: string;
  ctr?: string;
  feature?: string;
}

interface AttributionRow {
  source: string;
  share: number;
  leads: string;
  pipeline: string;
  trend: string;
  color: string;
}

const TABS = [
  { id: "traffic", label: "Organic Traffic & Clicks", icon: "📈" },
  { id: "rankings", label: "Keyword SERP Rankings", icon: "🎯" },
  { id: "ai", label: "AI Search & Leads", icon: "🤖" },
];

const TRAFFIC_PAGES: KeywordRow[] = [
  { url: "/services/enterprise-seo", keyword: "enterprise seo services", clicks: "38,420", position: "#1.2", ctr: "9.4%" },
  { url: "/case-studies/b2b-growth", keyword: "b2b organic acquisition", clicks: "29,150", position: "#2.1", ctr: "8.1%" },
  { url: "/technical-audit-guide", keyword: "technical seo audit", clicks: "21,800", position: "#1.8", ctr: "7.6%" },
  { url: "/ai-search-optimization", keyword: "ai search visibility", clicks: "18,340", position: "#1.0", ctr: "11.2%" },
];

const RANKING_KEYWORDS: KeywordRow[] = [
  { url: "/enterprise-seo", keyword: "enterprise seo agency", clicks: "18.1K vol", position: "#1", change: "+3", feature: "Featured Snippet" },
  { url: "/b2b-growth", keyword: "b2b search engine marketing", clicks: "14.2K vol", position: "#1", change: "+5", feature: "Sitelinks" },
  { url: "/ai-optimization", keyword: "saas seo strategy", clicks: "9.6K vol", position: "#2", change: "+4", feature: "AI Overview" },
  { url: "/technical-seo", keyword: "technical seo consultant", clicks: "8.4K vol", position: "#1", change: "+2", feature: "Knowledge Panel" },
];

const ATTRIBUTIONS: AttributionRow[] = [
  { source: "Google Organic Search", share: 62, leads: "9,230", pipeline: "$768,000", trend: "+28%", color: "#0066FF" },
  { source: "ChatGPT Search (SearchGPT)", share: 19, leads: "2,830", pipeline: "$242,000", trend: "+140%", color: "#10A37F" },
  { source: "Perplexity AI Citations", share: 13, leads: "1,935", pipeline: "$164,000", trend: "+94%", color: "#20808D" },
  { source: "Gemini & Copilot Referral", share: 6, leads: "895", pipeline: "$66,000", trend: "+62%", color: "#7C3AED" },
];

export function LiveDashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="analytics-dashboard"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(44px, 6vw, 68px) clamp(16px, 3vw, 28px) clamp(28px, 4vw, 40px)",
        borderTop: "1px solid #F0F0F2",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(24px, 3.5vw, 36px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "999px",
              backgroundColor: "#F5F5F7",
              border: "1px solid #E5E5EA",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1D1D1F",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#34C759",
                boxShadow: "0 0 6px rgba(52, 199, 89, 0.6)",
              }}
            />
            Live Client Dashboard
          </div>

          <h2
            className="seo-heading"
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              color: "#1D1D1F",
            }}
          >
            Real metrics. Live rankings. Zero vanity numbers.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(0.92rem, 1.2vw, 1.02rem)",
              color: "#6E6E73",
              maxWidth: "54ch",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Every OneImpact client receives a dedicated live dashboard connected directly to Google Search Console, GA4, and LLM citation indices.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "18px",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((tab, idx) => {
            const active = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 16px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: active ? 600 : 500,
                  cursor: "pointer",
                  transition: "all 180ms ease",
                  border: active ? "1.5px solid #1D1D1F" : "1px solid #E5E5EA",
                  backgroundColor: active ? "#1D1D1F" : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#48484A",
                  boxShadow: active ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                }}
              >
                <span style={{ fontSize: "14px" }}>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Dashboard Window Card */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #E5E5EA",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)",
            overflow: "hidden",
          }}
        >
          {/* Window Chrome Header */}
          <div
            style={{
              padding: "10px 16px",
              backgroundColor: "#FAFAFC",
              borderBottom: "1px solid #E5E5EA",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#FF5F56", display: "inline-block" }} />
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#FFBD2E", display: "inline-block" }} />
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#27C93F", display: "inline-block" }} />
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "11px",
                  color: "#86868B",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
                }}
              >
                portal.oneimpact.agency / client / live-analytics
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#34C759",
                  backgroundColor: "rgba(52, 199, 89, 0.1)",
                  padding: "2px 8px",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#34C759" }} />
                Synced 2m ago
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#6E6E73",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E5EA",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  fontWeight: 500,
                }}
              >
                Last 28 Days
              </span>
            </div>
          </div>

          {/* Metric Summary Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              borderBottom: "1px solid #F0F0F2",
              backgroundColor: "#FFFFFF",
            }}
          >
            {activeTab === 0 && (
              <>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Organic Clicks</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>482.4K</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+24.1%</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Search Impressions</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>6.2M</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+18.4%</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Average CTR</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>7.8%</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+1.2%</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Average Position</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>3.2</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#0066FF" }}>Top 3</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 1 && (
              <>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Keywords on Page 1</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>342</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+48 new</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Ranked #1-#3</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>164</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+32</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Search Visibility</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>84.2%</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+12.6%</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>SERP Features Held</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>89</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#0066FF" }}>Snippets</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 2 && (
              <>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Qualified Inbound Leads</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>14,890</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+320%</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Pipeline Influenced</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>$1.24M</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+38%</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px", borderRight: "1px solid #F0F0F2" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>AI Search Share</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>38%</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#10A37F" }}>ChatGPT/Perplexity</span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "11px", color: "#86868B", fontWeight: 500, marginBottom: "4px" }}>Organic Conv. Rate</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontSize: "21px", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-0.03em" }}>4.8%</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>+1.4%</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Interactive Visual Body */}
          <div style={{ padding: "18px 20px" }}>
            {/* TAB 0: Organic Traffic Chart & Table */}
            {activeTab === 0 && (
              <div>
                {/* Clean SVG Area Chart */}
                <div
                  style={{
                    backgroundColor: "#FAFAFC",
                    borderRadius: "12px",
                    border: "1px solid #EFEFEF",
                    padding: "16px 16px 12px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F" }}>
                      Daily Organic Click Trend (Last 28 Days)
                    </span>
                    <span style={{ fontSize: "11px", color: "#0066FF", fontWeight: 600 }}>
                      ● Continuous 7-Day Moving Avg
                    </span>
                  </div>

                  <div style={{ position: "relative", width: "100%", height: "140px" }}>
                    <svg viewBox="0 0 800 140" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id="clickGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="20" x2="800" y2="20" stroke="#E5E5EA" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="800" y2="60" stroke="#E5E5EA" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="800" y2="100" stroke="#E5E5EA" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M 0,110 Q 100,105 180,90 T 360,72 T 540,48 T 720,28 L 800,20 L 800,135 L 0,135 Z"
                        fill="url(#clickGradient)"
                      />

                      {/* Click Trend Curve */}
                      <path
                        d="M 0,110 Q 100,105 180,90 T 360,72 T 540,48 T 720,28 L 800,20"
                        fill="none"
                        stroke="#0066FF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Data markers */}
                      <circle cx="180" cy="90" r="3.5" fill="#0066FF" />
                      <circle cx="360" cy="72" r="3.5" fill="#0066FF" />
                      <circle cx="540" cy="48" r="3.5" fill="#0066FF" />
                      <circle cx="720" cy="28" r="3.5" fill="#0066FF" />
                      <circle cx="800" cy="20" r="4.5" fill="#0066FF" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Date labels */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10.5px",
                      color: "#86868B",
                      paddingTop: "6px",
                      borderTop: "1px solid #EFEFEF",
                    }}
                  >
                    <span>Day 1</span>
                    <span>Day 7</span>
                    <span>Day 14</span>
                    <span>Day 21</span>
                    <span>Day 28 (Today)</span>
                  </div>
                </div>

                {/* Top Performing Landing Pages & Queries */}
                <div style={{ overflowX: "auto" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F", marginBottom: "8px" }}>
                    Top Landing Pages & High-Intent Queries
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #E5E5EA", textAlign: "left", color: "#86868B" }}>
                        <th style={{ padding: "6px 8px", fontWeight: 500 }}>Target Query & URL</th>
                        <th style={{ padding: "6px 8px", fontWeight: 500, textAlign: "right" }}>Clicks</th>
                        <th style={{ padding: "6px 8px", fontWeight: 500, textAlign: "right" }}>Avg. Pos</th>
                        <th style={{ padding: "6px 8px", fontWeight: 500, textAlign: "right" }}>CTR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TRAFFIC_PAGES.map((row, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid #F5F5F7" }}>
                          <td style={{ padding: "8px" }}>
                            <div style={{ fontWeight: 600, color: "#1D1D1F" }}>{row.keyword}</div>
                            <div style={{ fontSize: "11px", color: "#86868B", fontFamily: "ui-monospace, monospace" }}>
                              {row.url}
                            </div>
                          </td>
                          <td style={{ padding: "8px", textAlign: "right", fontWeight: 600, color: "#1D1D1F" }}>
                            {row.clicks}
                          </td>
                          <td style={{ padding: "8px", textAlign: "right" }}>
                            <span
                              style={{
                                display: "inline-block",
                                padding: "2px 6px",
                                borderRadius: "4px",
                                fontSize: "11.5px",
                                fontWeight: 700,
                                backgroundColor: "rgba(52, 199, 89, 0.12)",
                                color: "#248A3D",
                              }}
                            >
                              {row.position}
                            </span>
                          </td>
                          <td style={{ padding: "8px", textAlign: "right", color: "#6E6E73", fontWeight: 500 }}>
                            {row.ctr}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 1: Keyword SERP Rankings */}
            {activeTab === 1 && (
              <div>
                {/* Ranking Distribution Bar */}
                <div
                  style={{
                    backgroundColor: "#FAFAFC",
                    borderRadius: "12px",
                    border: "1px solid #EFEFEF",
                    padding: "14px 16px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F" }}>
                      SERP Ranking Distribution (1,044 Keywords Tracked)
                    </span>
                    <span style={{ fontSize: "11px", color: "#34C759", fontWeight: 600 }}>
                      +42% in Top 3 Positions this quarter
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      height: "10px",
                      borderRadius: "999px",
                      overflow: "hidden",
                      backgroundColor: "#E5E5EA",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ width: "38%", backgroundColor: "#34C759" }} title="Pos 1-3: 38%" />
                    <div style={{ width: "36%", backgroundColor: "#0066FF" }} title="Pos 4-10: 36%" />
                    <div style={{ width: "18%", backgroundColor: "#FF9500" }} title="Pos 11-20: 18%" />
                    <div style={{ width: "8%", backgroundColor: "#8E8E93" }} title="Pos 21+: 8%" />
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "11px", color: "#6E6E73" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "#34C759" }} />
                      Positions 1–3: <strong>164 terms</strong>
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "#0066FF" }} />
                      Positions 4–10: <strong>178 terms</strong>
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "#FF9500" }} />
                      Positions 11–20: <strong>92 terms</strong>
                    </span>
                  </div>
                </div>

                {/* High-Value Tracked Terms */}
                <div style={{ overflowX: "auto" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F", marginBottom: "8px" }}>
                    Live Target Commercial Keyword Tracker
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #E5E5EA", textAlign: "left", color: "#86868B" }}>
                        <th style={{ padding: "6px 8px", fontWeight: 500 }}>Target Commercial Keyword</th>
                        <th style={{ padding: "6px 8px", fontWeight: 500 }}>Search Volume</th>
                        <th style={{ padding: "6px 8px", fontWeight: 500, textAlign: "center" }}>Rank</th>
                        <th style={{ padding: "6px 8px", fontWeight: 500 }}>SERP Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RANKING_KEYWORDS.map((row, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid #F5F5F7" }}>
                          <td style={{ padding: "8px", fontWeight: 600, color: "#1D1D1F" }}>
                            {row.keyword}
                          </td>
                          <td style={{ padding: "8px", color: "#6E6E73" }}>
                            {row.clicks}
                          </td>
                          <td style={{ padding: "8px", textAlign: "center" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <span
                                style={{
                                  padding: "2px 8px",
                                  borderRadius: "4px",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  backgroundColor: "#1D1D1F",
                                  color: "#FFFFFF",
                                }}
                              >
                                {row.position}
                              </span>
                              <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#34C759" }}>
                                ▲ {row.change}
                              </span>
                            </div>
                          </td>
                          <td style={{ padding: "8px" }}>
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: 500,
                                color: "#0066FF",
                                backgroundColor: "rgba(0, 102, 255, 0.08)",
                                padding: "2px 8px",
                                borderRadius: "999px",
                              }}
                            >
                              ★ {row.feature}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: AI Search & Lead Conversions */}
            {activeTab === 2 && (
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1F", marginBottom: "10px" }}>
                  Organic Lead Attribution by Search Engine & AI Model
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                  {ATTRIBUTIONS.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: "#FAFAFC",
                        borderRadius: "10px",
                        border: "1px solid #EFEFEF",
                        padding: "10px 14px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "6px",
                          fontSize: "12.5px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: item.color,
                            }}
                          />
                          <span style={{ fontWeight: 600, color: "#1D1D1F" }}>{item.source}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "11.5px", color: "#6E6E73" }}>{item.leads} leads</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "#1D1D1F" }}>{item.pipeline}</span>
                          <span style={{ fontSize: "11px", fontWeight: 600, color: "#34C759" }}>{item.trend}</span>
                        </div>
                      </div>

                      {/* Percentage Bar */}
                      <div
                        style={{
                          height: "6px",
                          borderRadius: "999px",
                          backgroundColor: "#E5E5EA",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${item.share}%`,
                            backgroundColor: item.color,
                            borderRadius: "999px",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(0, 102, 255, 0.05)",
                    border: "1px solid rgba(0, 102, 255, 0.15)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    fontSize: "12px",
                    color: "#1D1D1F",
                  }}
                >
                  <span>
                    ⚡ <strong>AI Citation Tracking:</strong> Your brand is actively indexed as a recommended provider across ChatGPT Search & Perplexity Pro.
                  </span>
                  <span style={{ fontWeight: 600, color: "#0066FF", whiteSpace: "nowrap" }}>
                    Verified GEO Active →
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
