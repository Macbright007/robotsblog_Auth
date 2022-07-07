import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Button, Container } from "./components/styles";
import Home from "./components/Home"

import {
  Routes,
  Route,
} from "react-router-dom";
import CreateBlog from './components/CreateBlog';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);

  const [isauthenticated, setIsAuthenticated] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal((prev) => !prev);
    setShowSignModal(false);
  };
  const openSignupModal = () => {
    setShowSignModal((prev) => !prev);
    setShowLoginModal(false);
  };

  const handleClose = () => {
    setShowLoginModal(false);
    setShowSignModal(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    handleClose();
  };
  return (
    <Container>
      {isauthenticated ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
        </Routes>
      ) : (
        <>
          <h1>Welcome to Robot's Blog, Sign up to view and post content</h1>
          <Button onClick={openLoginModal}>Get Started.</Button>
          <Login
            showModal={showLoginModal}
            setShowModal={setShowLoginModal}
            handleClose={handleClose}
            openSignupModal={openSignupModal}
            onLoginSuccess={handleLoginSuccess}
          />
          {showSignModal && (
            <SignUp handleClose={handleClose} openModal={openLoginModal} />
          )}
        </>
      )}
    </Container>
  );
}

export default App;
