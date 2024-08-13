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
        {location.pathname !== '/login' && location.pathname !== '/onboard' && <SideBar />}
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100vw',
//         height: '100vh',
//       }}
//     >
//     <BrowserRouter>
//       <div className="flex h-screen">
//         <SideBar />
//             <main className="flex-1 ml-64"> {/* ml-64: 네비게이션 바의 너비만큼 여백 추가 */}
//         <Routes>
//         <Route path="/" element={<Main />}></Route>
//         {/* <Route path="/onboard" element={<Onboard />}></Route> */}
//         <Route path="/chat" element={<Chat />}></Route>
//         {/* <Route path="/record" element={<Record />}></Route> */}
//         {/* <Route path="/mypage" element={<MyPage />}></Route> */}
//         {/* <Route path="/scrap" element={<Scrap />}></Route> */}
//         {/* <Route path="*" element={<NotFound />}></Route> */}
//           </main>
//         </div>
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

export default App;