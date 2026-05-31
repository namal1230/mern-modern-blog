import { useState } from "react";
import { Header } from "../components/Header";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { ScreenProps } from "../types/screen.types";
import { MOCK_POST } from "../constatnts/mockPost";
import styles from "./PostScreen.module.css";

export const  PostScreen:React.FC<ScreenProps>=({ setScreen })=>{
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(MOCK_POST.comments);

  return (
    <div className={styles.container}>
      <Header screen="post" setScreen={setScreen} notifications={3} />
      <div className={styles.contentWrapper}>
        <button onClick={() => setScreen("home")} className={styles.backButton}>
          ← Back to feed
        </button>

        <div className={styles.tagBadge} style={{
          background: tagBg.Backend, 
          color: tagColors.Backend,
        }}>#Backend</div>

        <h1 className={styles.title}>{MOCK_POST.title}</h1>

        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>CD</div>
          <div className={styles.authorDetails}>
            <p className={styles.authorName}>@{MOCK_POST.author}</p>
            <p className={styles.authorMeta}>{MOCK_POST.date} · {MOCK_POST.readTime}</p>
          </div>
          <div style={{ flex: 1 }} />
          <button onClick={() => setScreen("profile")} className={styles.followButton}>Follow</button>
        </div>

        <div className={styles.contentBox}>
          {MOCK_POST.body.map((block, i) => {
            if (block.type === "TEXT") return (
              <p key={i} className={styles.paragraph}>{block.value}</p>
            );
            if (block.type === "CODE") return (
              <pre key={i} className={styles.codeBlock}><code>{block.value}</code></pre>
            );
            return null;
          })}
        </div>

        <div className={styles.actions}>
          <button onClick={() => setLiked(!liked)} className={`${styles.actionButton} ${liked ? styles.liked : ""}`}>
            <svg width="16" height="16" fill={liked ? "#ef4444" : "none"} stroke={liked ? "#ef4444" : "#888"} strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            {liked ? MOCK_POST.likeCount + 1 : MOCK_POST.likeCount} Likes
          </button>
          <button className={styles.actionButton}>
            <svg width="16" height="16" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            {MOCK_POST.commentCount} Comments
          </button>
          <button className={`${styles.actionButton} ${styles.shareButton}`}>
            <svg width="15" height="15" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </button>
        </div>

        <div className={styles.commentsSection}>
          <h3 className={styles.commentsTitle}>
            {comments.length} Comments
          </h3>
          {comments.map((c, i) => (
            <div key={i} className={styles.comment} style={{
              borderBottom: i < comments.length - 1 ? "1px solid #f5f5f5" : "none",
            }}>
              <div className={styles.commentAvatar} style={{
                background: i === 0 ? "#1a4731" : "#2d2060",
              }}>{c.avatar}</div>
              <div className={styles.commentContent}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentUsername}>@{c.username}</span>
                  <span className={styles.commentTime}>{c.time}</span>
                </div>
                <p className={styles.commentText}>{c.text}</p>
              </div>
            </div>
          ))}

          <div className={styles.commentForm}>
            <div className={styles.commentFormAvatar}>CD</div>
            <div className={styles.commentFormContent}>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Share your thoughts…"
                rows={2}
                className={styles.commentTextarea}
              />
              <div className={styles.commentFormActions}>
                <button onClick={() => {
                  if (comment.trim()) {
                    setComments([{ username: "chakra_dev", avatar: "CD", text: comment, time: "just now" }, ...comments]);
                    setComment("");
                  }
                }} className={styles.postCommentButton}>Post comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}