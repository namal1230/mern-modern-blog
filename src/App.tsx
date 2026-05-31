import { useState } from 'react'
import { HomeScreen } from './pages/HomeScreen';
import { PostScreen } from './pages/PostScreen';
import { ProfileScreen } from './pages/ProfileScreen';
import { LandingScreen } from './pages/LandingScreen';
import { SignInScreen } from './pages/SignInScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState("landing");
   const [notifications] = useState(3);
 
   return (
     <div className="root">
       <div className="navigationBar">
         {[
           { id: "landing", label: "🏠 Landing" },
           { id: "signin", label: "🔑 Sign In" },
           { id: "home", label: "📰 Feed" },
           { id: "post", label: "📖 Post" },
           { id: "profile", label: "👤 Profile" },
         ].map(s => (
           <button key={s.id} onClick={() => setScreen(s.id)} className={`navButton ${screen === s.id ? 'active' : ''}`}>
             {s.label}
           </button>
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
