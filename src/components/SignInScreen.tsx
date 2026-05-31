import { MOCK_POSTS } from "../constatnts/mockPosts";
import type { ScreenProps } from "../types/screen.types";
import { useState } from "react";

export const SignInScreen:React.FC<ScreenProps> = ({ setScreen }) => {
  const [emailMode, setEmailMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      background: "#fafaf9",
    }}>
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: 40,
      }}>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <button onClick={() => setScreen("landing")} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22, fontWeight: 700, color: "#111",
            background: "none", border: "none", cursor: "pointer",
            display: "block", marginBottom: 48,
          }}>Phost</button>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32, fontWeight: 700, color: "#111",
            margin: "0 0 8px", letterSpacing: "-1px",
          }}>
            {emailMode ? "Sign in with email" : "Join the community"}
          </h1>
          <p style={{ margin: "0 0 36px", fontSize: 15, color: "#777", fontFamily: "system-ui, sans-serif" }}>
            {emailMode ? "Welcome back, developer." : "Start reading and sharing ideas."}
          </p>

          {!emailMode ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Continue with Google", icon: "G", bg: "#fff", border: "#ddd", color: "#333" },
                { label: "Continue with GitHub", icon: "⎇", bg: "#24292e", border: "#24292e", color: "#fff" },
                { label: "Continue with Facebook", icon: "f", bg: "#1877f2", border: "#1877f2", color: "#fff" },
              ].map(btn => (
                <button key={btn.label} onClick={() => setScreen("home")} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "13px 20px", borderRadius: 12,
                  border: `1.5px solid ${btn.border}`, background: btn.bg, color: btn.color,
                  fontSize: 14, fontWeight: 600, cursor: "pointer", width: "100%",
                  fontFamily: "system-ui, sans-serif",
                }}>
                  <span style={{ width: 22, fontWeight: 900, fontSize: 15 }}>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }}>
                <div style={{ flex: 1, height: 1, background: "#eee" }} />
                <span style={{ fontSize: 12, color: "#bbb", fontFamily: "system-ui, sans-serif" }}>or</span>
                <div style={{ flex: 1, height: 1, background: "#eee" }} />
              </div>
              <button onClick={() => setEmailMode(true)} style={{
                padding: "13px 20px", borderRadius: 12, border: "1.5px solid #eee",
                background: "white", color: "#333", fontSize: 14, fontWeight: 600,
                cursor: "pointer", fontFamily: "system-ui, sans-serif",
              }}>Continue with email</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: "#444", display: "block", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>Email</label>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10,
                    border: "1.5px solid #e5e5e5", fontSize: 14, outline: "none",
                    boxSizing: "border-box", fontFamily: "system-ui, sans-serif",
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: "#444", display: "block", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>Password</label>
                <input
                  type="password" value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10,
                    border: "1.5px solid #e5e5e5", fontSize: 14, outline: "none",
                    boxSizing: "border-box", fontFamily: "system-ui, sans-serif",
                  }}
                />
              </div>
              <button onClick={() => setScreen("home")} style={{
                padding: "13px", borderRadius: 12, border: "none",
                background: "#111", color: "white", fontSize: 14, fontWeight: 600,
                cursor: "pointer", marginTop: 4, fontFamily: "system-ui, sans-serif",
              }}>Sign in</button>
              <button onClick={() => setEmailMode(false)} style={{
                padding: "10px", borderRadius: 12, border: "none",
                background: "none", color: "#888", fontSize: 13,
                cursor: "pointer", fontFamily: "system-ui, sans-serif",
              }}>← Back to all options</button>
            </div>
          )}

          <p style={{ marginTop: 28, fontSize: 12, color: "#aaa", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <div style={{
        flex: 1, background: "#111", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: 60, position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "15%", right: "10%", width: 200, height: 200,
          borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300,
          borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)",
        }} />
        <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "white", lineHeight: 1.4, textAlign: "center", margin: 0 }}>
          "Write what you know,<br/><em>share what you've learned.</em>"
        </blockquote>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 320 }}>
          {MOCK_POSTS.slice(0, 3).map((p, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.9)", fontFamily: "system-ui, sans-serif", fontWeight: 500 }}>{p.title.slice(0, 35)}…</p>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "system-ui, sans-serif" }}>@{p.username}</p>
              </div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "system-ui, sans-serif" }}>♥ {p.likeCount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
