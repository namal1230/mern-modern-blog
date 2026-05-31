import { useState } from "react";
import type { HeaderProps } from "../types/header.types";

export const Header: React.FC<HeaderProps> = ({ screen, setScreen, notifications }) => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #f0f0f0",
      display: "flex", alignItems: "center",
      padding: "0 28px", height: 60,
      gap: 16,
    }}>
      <button onClick={() => setScreen("landing")} style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 20, fontWeight: 700, color: "#111",
        background: "none", border: "none", cursor: "pointer", padding: 0,
        letterSpacing: "-0.5px",
      }}>Phost</button>

      <div style={{ flex: 1 }} />

      <div style={{
        display: "flex", alignItems: "center",
        background: "#f5f5f5", borderRadius: 100,
        padding: "7px 16px", gap: 8, width: 200,
      }}>
        <svg width="14" height="14" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input placeholder="Search posts…" style={{
          border: "none", background: "transparent", outline: "none",
          fontSize: 13, color: "#333", width: "100%",
        }} />
      </div>

      <div style={{ flex: 1 }} />

      <button onClick={() => setScreen("home")} style={{
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 13, color: "#555", background: "none", border: "none",
        cursor: "pointer", padding: "6px 12px", borderRadius: 8,
        fontWeight: 500,
      }}>
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        Write
      </button>

      <div style={{ position: "relative" }}>
        <button onClick={() => { setNotifOpen(!notifOpen); setMenuOpen(false); }} style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#f5f5f5", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        }}>
          <svg width="17" height="17" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          {notifications > 0 && (
            <span style={{
              position: "absolute", top: 2, right: 2,
              width: 16, height: 16, borderRadius: "50%",
              background: "#ef4444", color: "white",
              fontSize: 9, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid white",
            }}>{notifications}</span>
          )}
        </button>
        {notifOpen && (
          <div style={{
            position: "absolute", right: 0, top: 44, width: 300,
            background: "white", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            border: "1px solid #f0f0f0", zIndex: 200, overflow: "hidden",
          }}>
            <div style={{ padding: "14px 18px 10px", borderBottom: "1px solid #f5f5f5" }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>Notifications</span>
            </div>
            {[
              { user: "frontend_owl", action: "liked your post", time: "2h ago", avatar: "FO" },
              { user: "tserious", action: "commented: 'Great write-up!'", time: "5h ago", avatar: "TS" },
              { user: "db_sage", action: "started following you", time: "1d ago", avatar: "DS" },
            ].map((n, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 18px", borderBottom: i < 2 ? "1px solid #f9f9f9" : "none",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "#111", color: "white", fontWeight: 700, fontSize: 11,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>{n.avatar}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 13 }}>
                    <strong>{n.user}</strong> {n.action}
                  </p>
                  <p style={{ margin: 0, fontSize: 11, color: "#999", marginTop: 2 }}>{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ position: "relative" }}>
        <button onClick={() => { setMenuOpen(!menuOpen); setNotifOpen(false); }} style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#111", color: "white", fontWeight: 700, fontSize: 13,
          border: "none", cursor: "pointer",
        }}>CD</button>
        {menuOpen && (
          <div style={{
            position: "absolute", right: 0, top: 44, width: 180,
            background: "white", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            border: "1px solid #f0f0f0", zIndex: 200, overflow: "hidden",
          }}>
            {[
              { label: "My profile", action: () => { setScreen("profile"); setMenuOpen(false); } },
              { label: "My library", action: () => setMenuOpen(false) },
              { label: "Sign out", action: () => { setScreen("landing"); setMenuOpen(false); } },
            ].map((item, i) => (
              <button key={i} onClick={item.action} style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "11px 18px", fontSize: 13, background: "none",
                border: "none", cursor: "pointer", color: "#222",
                borderBottom: i < 2 ? "1px solid #f9f9f9" : "none",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = "#f9f9f9"}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = "none"}
              >{item.label}</button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}