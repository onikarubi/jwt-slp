import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'; // あなたのサインアップフォームへのパスを適切に設定してください

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} /> {/* あなたのサインアップフォームコンポーネント */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
