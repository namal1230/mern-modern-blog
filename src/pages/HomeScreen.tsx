import { useState } from "react";
import { Header } from "../components/Header";
import { MOCK_POSTS } from "../constatnts/mockPosts";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { HomeProps } from "../types/home.types";

export const HomeScreen:React.FC<HomeProps> = ({ setScreen, notifications, setNotifications }) => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9" }}>
      <Header screen="home" setScreen={setScreen} notifications={notifications} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", display: "flex", gap: 40 }}>
        <main style={{ flex: 1, paddingTop: 36 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: "1px solid #eee", paddingBottom: 0 }}>
            {["feed", "following", "trending"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: "10px 18px", borderRadius: "8px 8px 0 0", border: "none",
                background: activeTab === tab ? "white" : "transparent",
                color: activeTab === tab ? "#111" : "#888",
                fontWeight: activeTab === tab ? 600 : 400,
                fontSize: 14, cursor: "pointer",
                borderBottom: activeTab === tab ? "2px solid #111" : "2px solid transparent",
                fontFamily: "system-ui, sans-serif",
              }}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {MOCK_POSTS.map((post, i) => (
              <article key={post._id} onClick={() => setScreen("post")} style={{
                background: "white", borderRadius: 16, padding: "24px 28px",
                border: "1px solid #f0f0f0", cursor: "pointer", marginBottom: 12,
                transition: "box-shadow 0.15s, border-color 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"; e.currentTarget.style.borderColor = "#e5e5e5"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#f0f0f0"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontFamily: "system-ui, sans-serif" }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: "50%",
                        background: ["#111", "#1a4731", "#2d2060", "#3d1a1a"][i % 4],
                        color: "white", fontWeight: 700, fontSize: 10,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>{post.username.slice(0, 2).toUpperCase()}</div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#333" }}>@{post.username}</span>
                      <span style={{ fontSize: 12, color: "#bbb" }}>·</span>
                      <span style={{ fontSize: 12, color: "#bbb" }}>{new Date(post.createdAt).toLocaleDateString("en", { month: "short", day: "numeric" })}</span>
                      <span style={{ fontSize: 12, color: "#bbb" }}>·</span>
                      <span style={{ fontSize: 12, color: "#bbb" }}>{post.readTime}</span>
                    </div>

                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 20, fontWeight: 700, color: "#111",
                      margin: "0 0 14px", lineHeight: 1.35,
                    }}>{post.title}</h2>

                    <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "system-ui, sans-serif" }}>
                      <span style={{
                        fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100,
                        background: tagBg[post.tag] || tagBg.default,
                        color: tagColors[post.tag] || tagColors.default,
                      }}>#{post.tag}</span>

                      <div style={{ display: "flex", gap: 14, color: "#bbb", fontSize: 13 }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                          {post.likeCount}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                          {post.commentCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    width: 80, height: 60, borderRadius: 10, background: "#f0f0f0",
                    flexShrink: 0, marginLeft: 20, display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#ccc", fontSize: 20,
                  }}>⌨</div>
                </div>
              </article>
            ))}
          </div>
        </main>

        <aside style={{ width: 260, paddingTop: 36, flexShrink: 0 }}>
          <div style={{ background: "white", borderRadius: 16, padding: "20px 22px", border: "1px solid #f0f0f0", marginBottom: 16 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "system-ui, sans-serif" }}>Popular tags</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Backend", "React", "TypeScript", "Database", "DevOps", "Python", "AI"].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, padding: "4px 12px", borderRadius: 100,
                  background: tagBg[tag] || "#f4f4f5",
                  color: tagColors[tag] || "#555", fontWeight: 500,
                  cursor: "pointer", fontFamily: "system-ui, sans-serif",
                }}>#{tag}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "white", borderRadius: 16, padding: "20px 22px", border: "1px solid #f0f0f0" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "system-ui, sans-serif" }}>Suggested writers</h3>
            {MOCK_POSTS.slice(0, 3).map((p, i) => (
              <div key={i} onClick={() => setScreen("profile")} style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 14, cursor: "pointer",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                  background: ["#111", "#1a4731", "#2d2060"][i],
                  color: "white", fontWeight: 700, fontSize: 11,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{p.username.slice(0, 2).toUpperCase()}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#222", fontFamily: "system-ui, sans-serif" }}>@{p.username}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#aaa", fontFamily: "system-ui, sans-serif" }}>{p.likeCount} likes</p>
                </div>
                <button style={{
                  padding: "4px 12px", borderRadius: 100, border: "1.5px solid #222",
                  background: "none", fontSize: 11, fontWeight: 600, cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                }}>Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
