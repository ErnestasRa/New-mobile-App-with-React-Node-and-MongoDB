import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from './context/main-context'
import AllPosts from './pages/all-posts';
import CreatePost from './pages/create-post';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import SinglePost from './pages/single-post';
import UserProfilePage from './pages/user-profile-page';

function App() {
  return (
    <MainContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loggedIn" element={<UserProfilePage />} />
          <Route path="/allposts" element={<AllPosts />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/singlepost" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
