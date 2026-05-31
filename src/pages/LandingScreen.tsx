import { MOCK_POSTS } from "../constatnts/mockPosts";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { ScreenProps } from "../types/screen.types";
import styles from "./LandingScreen.module.css";

export const LandingScreen: React.FC<ScreenProps> = ({ setScreen }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <span className={styles.logo}>Phost</span>
        <div className={styles.navButtons}>
          <button onClick={() => setScreen("signin")} className={styles.signInButton}>Sign in</button>
          <button onClick={() => setScreen("home")} className={styles.startButton}>Start reading</button>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.badge}>Developer Stories & Code Ideas</div>

        <h1 className={styles.heroTitle}>
          Where developers<br />
          <em className={styles.heroEmphasis}>write & learn</em>
        </h1>

        <p className={styles.heroDescription}>
          A place to read, find, and solve real problems. Share your code insights, discoveries, and tutorials with the dev community.
        </p>

        <button onClick={() => setScreen("home")} className={styles.heroButton}>Start reading for free →</button>

        <div className={styles.stats}>
          {[["1.2K+", "Posts published"], ["340+", "Active writers"], ["18K+", "Readers monthly"]].map(([num, label]) => (
            <div key={label} className={styles.stat}>
              <div className={styles.statNumber}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.trendingSection}>
        <h2 className={styles.trendingTitle}>Trending this week</h2>
        <div className={styles.trendingGrid}>
          {MOCK_POSTS.map((post, i) => (
            <button key={post._id} onClick={() => setScreen("home")} className={styles.trendingCard}>
              <div className={styles.trendingCardHeader}>
                <span className={styles.trendingTag} style={{
                  background: (tagBg as Record<string, string>)[post.tag] || tagBg.default,
                  color: (tagColors as Record<string, string>)[post.tag] || tagColors.default,
                }}>#{post.tag}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <h3 className={styles.trendingCardTitle}>{post.title}</h3>
              <div className={styles.trendingCardFooter}>
                <span className={styles.trendingAuthor}>@{post.username}</span>
                <div className={styles.trendingStats}>
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
