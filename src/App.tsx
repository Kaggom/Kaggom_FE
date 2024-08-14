import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Chat from './pages/Chat/Chat';
import SideBar from './components/SideBar';
import Login from './pages/Login/Login';
import Onboard from './pages/Onboard/Onboard';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen justify-center items-center">
        <main className="flex w-[381px] flex-col justify-center items-center ">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboard" element={<Onboard />} />
            {/* 다른 라우트 추가 */}
          </Routes>
        </main>
        {location.pathname !== '/login' && location.pathname !== '/onboard' && location.pathname !== '/' && <SideBar />}
      </div>
    </BrowserRouter>
  );
}

export default App;