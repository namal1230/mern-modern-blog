import { useState } from "react";
import { Header } from "../components/Header";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { ScreenProps } from "../types/screen.types";
import { MOCK_POSTS } from "../constatnts/mockPosts";
import { MOCK_PROFILE } from "../constatnts/mockProfile";

export const  ProfileScreen:React.FC<ScreenProps>=({ setScreen })=> {
  const [following, setFollowing] = useState(false);
  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9" }}>
      <Header screen="profile" setScreen={setScreen} notifications={3} />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 28px 80px" }}>
        <div style={{ background: "white", borderRadius: 20, padding: "40px 48px", border: "1px solid #f0f0f0", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 28, flexWrap: "wrap" }}>
            <div style={{
              width: 90, height: 90, borderRadius: "50%", background: "#111",
              color: "white", fontWeight: 700, fontSize: 28, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>CD</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#111", fontFamily: "'Playfair Display', serif" }}>
                  @{MOCK_PROFILE.name}
                </h1>
                <button onClick={() => setFollowing(!following)} style={{
                  padding: "8px 22px", borderRadius: 100,
                  border: `1.5px solid ${following ? "#bbb" : "#111"}`,
                  background: following ? "white" : "#111",
                  color: following ? "#555" : "white",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                }}>{following ? "Following ✓" : "Follow"}</button>
              </div>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#888", fontFamily: "system-ui, sans-serif" }}>{MOCK_PROFILE.jobTitle} · {MOCK_PROFILE.experienceYears} yrs exp</p>
              <p style={{ margin: "16px 0 20px", fontSize: 15, color: "#444", lineHeight: 1.6, fontFamily: "system-ui, sans-serif", maxWidth: 480 }}>
                {MOCK_PROFILE.bio}
              </p>
              <div style={{ display: "flex", gap: 28, fontFamily: "system-ui, sans-serif" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 20, color: "#111" }}>{MOCK_PROFILE.followers}</span>
                  <span style={{ fontSize: 13, color: "#999", marginLeft: 6 }}>followers</span>
                </div>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 20, color: "#111" }}>{MOCK_PROFILE.posts}</span>
                  <span style={{ fontSize: 13, color: "#999", marginLeft: 6 }}>posts</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #f0f0f0" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "system-ui, sans-serif" }}>Skills</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {MOCK_PROFILE.skills.map(skill => (
                <span key={skill} style={{
                  padding: "6px 16px", borderRadius: 100,
                  background: "#f5f5f5", fontSize: 13, fontWeight: 500, color: "#333",
                  fontFamily: "system-ui, sans-serif",
                }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22, fontWeight: 700, color: "#111", margin: "0 0 20px",
        }}>Published posts</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {MOCK_POSTS.map((post, i) => (
            <div key={post._id} onClick={() => setScreen("post")} style={{
              background: "white", borderRadius: 16, padding: "22px 28px",
              border: "1px solid #f0f0f0", cursor: "pointer", display: "flex",
              alignItems: "center", gap: 20,
              transition: "box-shadow 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600, color: "#111", fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
                <div style={{ display: "flex", gap: 12, alignItems: "center", fontFamily: "system-ui, sans-serif" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 100,
                    background: tagBg[post.tag] || tagBg.default, color: tagColors[post.tag] || tagColors.default,
                  }}>#{post.tag}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>♥ {post.likeCount}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>💬 {post.commentCount}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>{post.readTime}</span>
                </div>
              </div>
              <svg width="16" height="16" fill="none" stroke="#ccc" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}