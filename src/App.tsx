import { useState } from 'react'
import { HomeScreen } from './pages/HomeScreen';
import { PostScreen } from './pages/PostScreen';
import { ProfileScreen } from './pages/ProfileScreen';
import { LandingScreen } from './pages/LandingScreen';
import { SignInScreen } from './pages/SignInScreen';

function App() {
  const [screen, setScreen] = useState("landing");
   const [notifications] = useState(3);
 
   return (
     <div style={{ fontFamily: "system-ui, sans-serif" }}>
       <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
         * { box-sizing: border-box; }
         body { margin: 0; }
         button { cursor: pointer; }
         textarea { font-family: system-ui, sans-serif; }
         ::-webkit-scrollbar { width: 6px; }
         ::-webkit-scrollbar-track { background: transparent; }
         ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 3px; }
       `}</style>
 
       <div style={{ display: "flex", gap: 0, justifyContent: "center", padding: "8px 0 0", background: "#f0f0ef", borderBottom: "1px solid #e5e5e5" }}>
         {[
           { id: "landing", label: "🏠 Landing" },
           { id: "signin", label: "🔑 Sign In" },
           { id: "home", label: "📰 Feed" },
           { id: "post", label: "📖 Post" },
           { id: "profile", label: "👤 Profile" },
         ].map(s => (
           <button key={s.id} onClick={() => setScreen(s.id)} style={{
             padding: "7px 18px", fontSize: 12, fontWeight: screen === s.id ? 700 : 400,
             background: screen === s.id ? "white" : "transparent",
             border: "none", borderRadius: "8px 8px 0 0",
             color: screen === s.id ? "#111" : "#666", cursor: "pointer",
             fontFamily: "system-ui, sans-serif",
             borderBottom: screen === s.id ? "2px solid #111" : "2px solid transparent",
           }}>{s.label}</button>
         ))}
       </div>
 
       {screen === "landing" && <LandingScreen setScreen={setScreen} />}
       {screen === "signin" && <SignInScreen setScreen={setScreen} />}
       {screen === "home" && <HomeScreen setScreen={setScreen} notifications={notifications} setNotifications={() => {}} />}
       {screen === "post" && <PostScreen setScreen={setScreen} />}
       {screen === "profile" && <ProfileScreen setScreen={setScreen} />}
     </div>
   );
}

export default App
