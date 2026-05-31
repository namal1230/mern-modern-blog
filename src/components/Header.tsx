import { useState } from "react";
import type { HeaderProps } from "../types/header.types";
import styles from "./Header.module.css";

export const Header: React.FC<HeaderProps> = ({ screen, setScreen, notifications }) => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <button onClick={() => setScreen("landing")} className={styles.button}>Phost</button>

      <div className={styles.spacer} />

      <div className={styles.searchContainer}>
        <svg width="14" height="14" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input placeholder="Search posts…" className={styles.searchInput} />
      </div>

      <div className={styles.spacer} />

      <button onClick={() => setScreen("home")} className={styles.writeButton}>
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        Write
      </button>

      <div className={styles.notificationContainer}>
        <button onClick={() => { setNotifOpen(!notifOpen); setMenuOpen(false); }} className={styles.notificationButton}>
          <svg width="17" height="17" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          {notifications > 0 && (
            <span className={styles.notificationBadge}>{notifications}</span>
          )}
        </button>
        {notifOpen && (
          <div className={styles.notificationDropdown}>
            <div className={styles.notificationHeader}>
              <span>Notifications</span>
            </div>
            {[
              { user: "frontend_owl", action: "liked your post", time: "2h ago", avatar: "FO" },
              { user: "tserious", action: "commented: 'Great write-up!'", time: "5h ago", avatar: "TS" },
              { user: "db_sage", action: "started following you", time: "1d ago", avatar: "DS" },
            ].map((n, i) => (
              <div key={i} className={styles.notificationItem}>
                <div className={styles.notificationAvatar}>{n.avatar}</div>
                <div className={styles.notificationContent}>
                  <p className={styles.notificationUser}>
                    <strong>{n.user}</strong> {n.action}
                  </p>
                  <p className={styles.notificationTime}>{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.menuContainer}>
        <button onClick={() => { setMenuOpen(!menuOpen); setNotifOpen(false); }} className={styles.menuButton}>
        CD
      </button>
      <div className={styles.menuContainer}>
        <button onClick={() => { setMenuOpen(!menuOpen); setNotifOpen(false); }} className={styles.menuButton}>
          <svg width="17" height="17" fill="none" stroke="#555" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
        {menuOpen && (
          <div className={styles.menuDropdown}>
            {[
              { label: "My profile", action: () => { setScreen("profile"); setMenuOpen(false); } },
              { label: "My library", action: () => setMenuOpen(false) },
              { label: "Sign out", action: () => { setScreen("landing"); setMenuOpen(false); } },
            ].map((item, i) => (
              <button key={i} onClick={item.action} className={styles.menuItem}>
                {item.label}
              </button>
            ))}
          </div>
        )}
        </div>
      </div>
    </header>
  );
}