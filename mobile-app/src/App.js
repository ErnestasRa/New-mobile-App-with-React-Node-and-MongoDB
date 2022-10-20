import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from './context/main-context'
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import UserProfilePage from './pages/user-profile-page';

function App() {
  return (
    <MainContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loggedIn" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
