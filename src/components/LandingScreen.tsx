import { MOCK_POSTS } from "../constatnts/mockPosts";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { ScreenProps } from "../types/screen.types";

export const LandingScreen: React.FC<ScreenProps> = ({ setScreen }) => {
  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9", fontFamily: "Georgia, serif" }}>
      <nav style={{
        display: "flex", alignItems: "center", padding: "20px 40px",
        justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#111" }}>Phost</span>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setScreen("signin")} style={{
            padding: "9px 22px", borderRadius: 100, border: "1.5px solid #ddd",
            fontSize: 14, background: "white", cursor: "pointer", fontWeight: 500, color: "#333",
          }}>Sign in</button>
          <button onClick={() => setScreen("home")} style={{
            padding: "9px 22px", borderRadius: 100, border: "none",
            fontSize: 14, background: "#111", cursor: "pointer", fontWeight: 500, color: "white",
          }}>Start reading</button>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px 60px", textAlign: "center" }}>
        <div style={{
          display: "inline-block", background: "#f0fdf4", color: "#16a34a",
          fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 100,
          letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 28,
          fontFamily: "system-ui, sans-serif",
        }}>Developer Stories & Code Ideas</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(40px, 7vw, 76px)",
          fontWeight: 700, lineHeight: 1.1, color: "#0a0a0a",
          margin: "0 0 28px", letterSpacing: "-2px",
        }}>
          Where developers<br />
          <em style={{ fontStyle: "italic", color: "#555" }}>write & learn</em>
        </h1>

        <p style={{
          fontSize: 18, color: "#666", maxWidth: 520, margin: "0 auto 48px",
          lineHeight: 1.7, fontFamily: "system-ui, sans-serif",
        }}>
          A place to read, find, and solve real problems. Share your code insights, discoveries, and tutorials with the dev community.
        </p>

        <button onClick={() => setScreen("home")} style={{
          padding: "14px 40px", borderRadius: 100,
          background: "#111", color: "white", fontWeight: 600, fontSize: 16,
          border: "none", cursor: "pointer", letterSpacing: "-0.3px",
          fontFamily: "system-ui, sans-serif",
        }}>Start reading for free →</button>

        <div style={{
          display: "flex", justifyContent: "center", gap: 32, marginTop: 56,
          borderTop: "1px solid #eee", paddingTop: 40,
          fontFamily: "system-ui, sans-serif",
        }}>
          {[["1.2K+", "Posts published"], ["340+", "Active writers"], ["18K+", "Readers monthly"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#111" }}>{num}</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 100px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 28, fontWeight: 700, color: "#111", marginBottom: 28,
        }}>Trending this week</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {MOCK_POSTS.map((post, i) => (
            <button key={post._id} onClick={() => setScreen("home")} style={{
              textAlign: "left", background: "white", border: "1px solid #eee",
              borderRadius: 16, padding: "24px 24px 20px", cursor: "pointer",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100,
                  background: (tagBg as Record<string, string>)[post.tag] || tagBg.default,
                  color: (tagColors as Record<string, string>)[post.tag] || tagColors.default,
                  fontFamily: "system-ui, sans-serif",
                }}>#{post.tag}</span>
                <span style={{ fontSize: 11, color: "#999", fontFamily: "system-ui, sans-serif" }}>{post.readTime}</span>
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17, fontWeight: 700, color: "#111", lineHeight: 1.4,
                margin: "0 0 16px",
              }}>{post.title}</h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "system-ui, sans-serif" }}>
                <span style={{ fontSize: 12, color: "#888" }}>@{post.username}</span>
                <div style={{ display: "flex", gap: 12, color: "#aaa", fontSize: 12 }}>
                  <span>♥ {post.likeCount}</span>
                  <span>💬 {post.commentCount}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
