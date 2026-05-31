import { useState } from "react";
import { Header } from "../components/Header";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { ScreenProps } from "../types/screen.types";
import { MOCK_POST } from "../constatnts/mockPost";

export const  PostScreen:React.FC<ScreenProps>=({ setScreen })=>{
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(MOCK_POST.comments);

  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9" }}>
      <Header screen="post" setScreen={setScreen} notifications={3} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 28px 80px" }}>
        <button onClick={() => setScreen("home")} style={{
          display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#888",
          background: "none", border: "none", cursor: "pointer", marginBottom: 32, padding: 0,
          fontFamily: "system-ui, sans-serif",
        }}>
          ← Back to feed
        </button>

        <div style={{
          display: "inline-block", marginBottom: 16,
          fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 100,
          background: tagBg.Backend, color: tagColors.Backend,
          fontFamily: "system-ui, sans-serif",
        }}>#Backend</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, color: "#0a0a0a",
          margin: "0 0 24px", lineHeight: 1.2, letterSpacing: "-1px",
        }}>{MOCK_POST.title}</h1>

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36, fontFamily: "system-ui, sans-serif" }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%", background: "#111",
            color: "white", fontWeight: 700, fontSize: 13,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>CD</div>
          <div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: "#222" }}>@{MOCK_POST.author}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#999" }}>{MOCK_POST.date} · {MOCK_POST.readTime}</p>
          </div>
          <div style={{ flex: 1 }} />
          <button onClick={() => setScreen("profile")} style={{
            padding: "7px 18px", borderRadius: 100, border: "1.5px solid #222",
            background: "none", fontSize: 13, fontWeight: 600, cursor: "pointer",
            fontFamily: "system-ui, sans-serif",
          }}>Follow</button>
        </div>

        <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", border: "1px solid #f0f0f0", marginBottom: 32 }}>
          {MOCK_POST.body.map((block, i) => {
            if (block.type === "TEXT") return (
              <p key={i} style={{
                fontSize: 17, lineHeight: 1.8, color: "#2a2a2a",
                margin: "0 0 24px", fontFamily: "Georgia, serif",
              }}>{block.value}</p>
            );
            if (block.type === "CODE") return (
              <pre key={i} style={{
                background: "#0d1117", color: "#e6edf3",
                borderRadius: 12, padding: "24px 28px", overflowX: "auto",
                fontSize: 14, lineHeight: 1.7, margin: "0 0 24px",
                fontFamily: "'Courier New', monospace",
              }}><code>{block.value}</code></pre>
            );
            return null;
          })}
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 40, fontFamily: "system-ui, sans-serif" }}>
          <button onClick={() => setLiked(!liked)} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 22px", borderRadius: 100,
            border: `1.5px solid ${liked ? "#ef4444" : "#ddd"}`,
            background: liked ? "#fff1f1" : "white", cursor: "pointer", fontSize: 14, fontWeight: 500,
            color: liked ? "#ef4444" : "#555",
          }}>
            <svg width="16" height="16" fill={liked ? "#ef4444" : "none"} stroke={liked ? "#ef4444" : "#888"} strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            {liked ? MOCK_POST.likeCount + 1 : MOCK_POST.likeCount} Likes
          </button>
          <button style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 22px", borderRadius: 100, border: "1.5px solid #ddd",
            background: "white", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#555",
          }}>
            <svg width="16" height="16" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            {MOCK_POST.commentCount} Comments
          </button>
          <button style={{
            display: "flex", alignItems: "center", gap: 8, marginLeft: "auto",
            padding: "10px 22px", borderRadius: 100, border: "1.5px solid #ddd",
            background: "white", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#555",
            fontFamily: "system-ui, sans-serif",
          }}>
            <svg width="15" height="15" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </button>
        </div>

        <div style={{ background: "white", borderRadius: 20, padding: "28px 32px", border: "1px solid #f0f0f0" }}>
          <h3 style={{ margin: "0 0 24px", fontSize: 16, fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>
            {comments.length} Comments
          </h3>
          {comments.map((c, i) => (
            <div key={i} style={{
              display: "flex", gap: 14, marginBottom: 24,
              paddingBottom: 24, borderBottom: i < comments.length - 1 ? "1px solid #f5f5f5" : "none",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                background: i === 0 ? "#1a4731" : "#2d2060",
                color: "white", fontWeight: 700, fontSize: 11,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{c.avatar}</div>
              <div>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ fontWeight: 600, fontSize: 13 }}>@{c.username}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>{c.time}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "#333", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{c.text}</p>
              </div>
            </div>
          ))}

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
              background: "#111", color: "white", fontWeight: 700, fontSize: 11,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>CD</div>
            <div style={{ flex: 1 }}>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Share your thoughts…"
                rows={2}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 12,
                  border: "1.5px solid #e5e5e5", fontSize: 14, resize: "none",
                  outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif",
                  color: "#333",
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                <button onClick={() => {
                  if (comment.trim()) {
                    setComments([{ username: "chakra_dev", avatar: "CD", text: comment, time: "just now" }, ...comments]);
                    setComment("");
                  }
                }} style={{
                  padding: "8px 20px", borderRadius: 100, border: "none",
                  background: "#111", color: "white", fontSize: 13, fontWeight: 600,
                  cursor: "pointer", fontFamily: "system-ui, sans-serif",
                }}>Post comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}