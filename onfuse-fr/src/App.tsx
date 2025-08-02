
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ConfirmRecoveryPhrase from "./components/ConfirmRecoveryPhrase";
import SecureWallet from "./components/SecureWallet";
import HomePage from "./components/HomePage";
import './App.css';

const navItems = [
  { label: 'Home', path: '/', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0h4m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2z" /></svg>
  ) },
  { label: 'Wallet', path: '/secure', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" /></svg>
  ) },
  { label: 'Confirm', path: '/confirm', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  ) },
];

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-14 z-50 sm:max-w-sm sm:mx-auto">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${location.pathname === item.path ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
        >
          {item.icon}
          <span className="text-xs mt-0.5">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function AppRoutes() {
  return (
    <div className="pb-16 min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secure" element={<SecureWallet />} />
        <Route path="/confirm" element={<ConfirmRecoveryPhrase />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <h1 className='text-white bg-black'>Hello World</h1>
//   )
// }

export default App
