import { MOCK_POSTS } from "../constatnts/mockPosts";
import type { ScreenProps } from "../types/screen.types";
import { useState } from "react";
import styles from "./SignInScreen.module.css";

export const SignInScreen:React.FC<ScreenProps> = ({ setScreen }) => {
  const [emailMode, setEmailMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.formWrapper}>
          <button onClick={() => setScreen("landing")} className={styles.backButton}>Phost</button>

          <h1 className={styles.title}>
            {emailMode ? "Sign in with email" : "Join the community"}
          </h1>
          <p className={styles.subtitle}>
            {emailMode ? "Welcome back, developer." : "Start reading and sharing ideas."}
          </p>

          {!emailMode ? (
            <div className={styles.formGroup}>
              {[
                { label: "Continue with Google", icon: "G", bg: "#fff", border: "#ddd", color: "#333" },
                { label: "Continue with GitHub", icon: "⎇", bg: "#24292e", border: "#24292e", color: "#fff" },
                { label: "Continue with Facebook", icon: "f", bg: "#1877f2", border: "#1877f2", color: "#fff" },
              ].map(btn => (
                <button key={btn.label} onClick={() => setScreen("home")} className={styles.oauthButton} style={{
                  borderColor: btn.border,
                  background: btn.bg,
                  color: btn.color,
                }}>
                  <span className={styles.oauthIcon}>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
              <div className={styles.divider}>
                <div className={styles.dividerLine} />
                <span className={styles.dividerText}>or</span>
                <div className={styles.dividerLine} />
              </div>
              <button onClick={() => setEmailMode(true)} className={styles.emailButton}>Continue with email</button>
            </div>
          ) : (
            <div className={styles.formFields}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Email</label>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={styles.fieldInput}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Password</label>
                <input
                  type="password" value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={styles.fieldInput}
                />
              </div>
              <button onClick={() => setScreen("home")} className={styles.submitButton}>Sign in</button>
              <button onClick={() => setEmailMode(false)} className={styles.backLink}>← Back to all options</button>
            </div>
          )}

          <p className={styles.terms}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.decorativeCircle1} />
        <div className={styles.decorativeCircle2} />
        <blockquote className={styles.rightQuote}>
          "Write what you know,<br/><em className={styles.rightQuoteEmphasis}>share what you've learned.</em>"
        </blockquote>
        <div className={styles.rightPostList}>
          {MOCK_POSTS.slice(0, 3).map((p, i) => (
            <div key={i} className={styles.rightPostItem}>
              <div>
                <p className={styles.rightPostTitle}>{p.title.slice(0, 35)}…</p>
                <p className={styles.rightPostAuthor}>@{p.username}</p>
              </div>
              <span className={styles.rightPostLikes}>♥ {p.likeCount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
