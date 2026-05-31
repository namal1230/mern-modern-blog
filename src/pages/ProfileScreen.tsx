import { useState } from "react";
import { Header } from "../components/Header";
import { tagColors } from "../constatnts/tagColors";
import { tagBg } from "../constatnts/tagBg";
import type { ScreenProps } from "../types/screen.types";
import { MOCK_POSTS } from "../constatnts/mockPosts";
import { MOCK_PROFILE } from "../constatnts/mockProfile";
import styles from "./ProfileScreen.module.css";

export const  ProfileScreen:React.FC<ScreenProps>=({ setScreen })=> {
  const [following, setFollowing] = useState(false);
  return (
    <div className={styles.container}>
      <Header screen="profile" setScreen={setScreen} notifications={3} />
      <div className={styles.contentWrapper}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.profileAvatar}>CD</div>
            <div className={styles.profileInfo}>
              <div className={styles.profileTitleSection}>
                <h1 className={styles.profileName}>
                  @{MOCK_PROFILE.name}
                </h1>
                <button onClick={() => setFollowing(!following)} className={`${styles.profileFollowButton} ${following ? styles.following : ""}`}>
                  {following ? "Following ✓" : "Follow"}
                </button>
              </div>
              <p className={styles.profileJobTitle}>{MOCK_PROFILE.jobTitle} · {MOCK_PROFILE.experienceYears} yrs exp</p>
              <p className={styles.profileBio}>
                {MOCK_PROFILE.bio}
              </p>
              <div className={styles.profileStats}>
                <div className={styles.profileStat}>
                  <span className={styles.profileStatNumber}>{MOCK_PROFILE.followers}</span>
                  <span className={styles.profileStatLabel}>followers</span>
                </div>
                <div className={styles.profileStat}>
                  <span className={styles.profileStatNumber}>{MOCK_PROFILE.posts}</span>
                  <span className={styles.profileStatLabel}>posts</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.profileSkillsSection}>
            <h3 className={styles.skillsLabel}>Skills</h3>
            <div className={styles.skillsList}>
              {MOCK_PROFILE.skills.map(skill => (
                <span key={skill} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <h2 className={styles.postsTitle}>Published posts</h2>

        <div className={styles.postsList}>
          {MOCK_POSTS.map((post, i) => (
            <div key={post._id} onClick={() => setScreen("post")} className={styles.postItem}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div className={styles.postItemContent}>
                <h3 className={styles.postItemTitle}>{post.title}</h3>
                <div className={styles.postItemMeta}>
                  <span className={styles.postItemTag} style={{
                    background: tagBg[post.tag] || tagBg.default, 
                    color: tagColors[post.tag] || tagColors.default,
                  }}>#{post.tag}</span>
                  <span className={styles.postItemStat}>♥ {post.likeCount}</span>
                  <span className={styles.postItemStat}>💬 {post.commentCount}</span>
                  <span className={styles.postItemStat}>{post.readTime}</span>
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