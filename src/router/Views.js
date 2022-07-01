import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";

const Views = () => {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/register" component={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Views;
