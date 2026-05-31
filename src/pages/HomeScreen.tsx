import { useState } from "react";
import { Header } from "../components/Header";
import { MOCK_POSTS } from "../constatnts/mockPosts";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { HomeProps } from "../types/home.types";
import styles from "./HomeScreen.module.css";

export const HomeScreen:React.FC<HomeProps> = ({ setScreen, notifications, setNotifications }) => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className={styles.container}>
      <Header screen="home" setScreen={setScreen} notifications={notifications} />
      <div className={styles.contentWrapper}>
        <main className={styles.main}>
          <div className={styles.tabContainer}>
            {["feed", "following", "trending"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.postList}>
            {MOCK_POSTS.map((post, i) => (
              <article key={post._id} onClick={() => setScreen("post")} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <div className={styles.postAvatar} style={{ background: ["#111", "#1a4731", "#2d2060", "#3d1a1a"][i % 4] }}>
                        {post.username.slice(0, 2).toUpperCase()}
                      </div>
                      <span className={styles.postUsername}>@{post.username}</span>
                      <span className={styles.postDate}>·</span>
                      <span className={styles.postDate}>{new Date(post.createdAt).toLocaleDateString("en", { month: "short", day: "numeric" })}</span>
                      <span className={styles.postDate}>·</span>
                      <span className={styles.postDate}>{post.readTime}</span>
                    </div>

                    <h2 className={styles.postTitle}>{post.title}</h2>

                    <div className={styles.postFooter}>
                      <span className={styles.tagBadge} style={{
                        background: tagBg[post.tag] || tagBg.default,
                        color: tagColors[post.tag] || tagColors.default,
                      }}>#{post.tag}</span>

                      <div className={styles.postStats}>
                        <span className={styles.statItem}>
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                          {post.likeCount}
                        </span>
                        <span className={styles.statItem}>
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                          {post.commentCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.postImage}>⌨</div>
                </div>
              </article>
            ))}
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Popular tags</h3>
            <div className={styles.tagGrid}>
              {["Backend", "React", "TypeScript", "Database", "DevOps", "Python", "AI"].map(tag => (
                <span key={tag} className={styles.tag} style={{
                  background: tagBg[tag] || "#f4f4f5",
                  color: tagColors[tag] || "#555",
                }}>#{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Suggested writers</h3>
            {MOCK_POSTS.slice(0, 3).map((p, i) => (
              <div key={i} onClick={() => setScreen("profile")} className={styles.suggestedWriter}>
                <div className={styles.writerAvatar} style={{
                  background: ["#111", "#1a4731", "#2d2060"][i],
                }}>
                  {p.username.slice(0, 2).toUpperCase()}
                </div>
                <div className={styles.writerInfo}>
                  <p className={styles.writerName}>@{p.username}</p>
                  <p className={styles.writerLikes}>{p.likeCount} likes</p>
                </div>
                <button className={styles.followButton}>Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
