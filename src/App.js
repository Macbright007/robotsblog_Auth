import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Button, Container } from './components/styles';


function App() {
 const [showModal, setShowModal] = useState(false)
 const [showSignModal, setShowSignModal] = useState(false)

 const openModal = () => {
    setShowModal(prev => !prev);
    setShowSignModal(false);
 }
 const openSignupModal = () => {
    setShowSignModal(prev => !prev);
    setShowModal(false);
 }

 const handleClose = () => {
  setShowModal(false);
  setShowSignModal(false);
};

  return (
    <Container>
      <h1>Welcome to Robot's Blog, Sign up to view and post content</h1>
      <Button onClick={openModal}>Get Started.</Button>
      <Login showModal={showModal} setShowModal={setShowModal} handleClose={handleClose} openSignupModal={openSignupModal}/>
      {showSignModal && <SignUp handleClose = {handleClose} openModal={openModal} />}
    </Container>
  );
}

export default App;
