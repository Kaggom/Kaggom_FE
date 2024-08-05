import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/onboard" element={<Onboard />}></Route> */}
        {/* <Route path="/chat" element={<Chat />}></Route> */}
        {/* <Route path="/record" element={<Record />}></Route> */}
        {/* <Route path="/mypage" element={<MyPage />}></Route> */}
        {/* <Route path="/scrap" element={<Scrap />}></Route> */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;