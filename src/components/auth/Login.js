import {
  Background,
  CloseFormButton,
  FormContent,
  FormImg,
  FormWrapper,
  InnerForm,
  InnerContent
} from "../styles";
import login from "../../image/login.svg";
import { useState } from "react";
import Axios from "axios";
import { URL } from "../Home";
import { useNavigate } from "react-router-dom";



// initializing login values
const loginInitialValues = {
  username: "",
  password: ""
};

const Login = ({ openSignupModal, showModal,  onLoginSuccess, handleClose }) => {

  const [logininfos, setLoginInfos] = useState(loginInitialValues);
  const [loading, setLoading] = useState(false);

  //used to redirect to home page
  let navigate = useNavigate();

  // fucntion to get user details
  const setLoginDetails = async (e) => {
    setLoginInfos({ ...logininfos, [e.target.name]: e.target.value });
  };

  // function to submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.post(`${URL}/login`, logininfos);

      if (result?.status === 200) {
        setLoading(false);
        onLoginSuccess()
        return navigate("/", { replace: true });
      }
    } catch {
      console.log("failed to login, wrong credentials");
    }
    setLoginInfos(loginInitialValues);
  };

  return (
    <>
      {showModal ? (
        <Background>
          <FormWrapper showModal={showModal} onSubmit={handleSubmit}>
            <FormImg src={login} alt="pic" />
            <FormContent>
              <h1>Login</h1>
              <InnerForm>
                <label htmlFor="username">username:</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                    value={logininfos.username}
                    onChange={setLoginDetails}
                />
                <label htmlFor="password">password:</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                    value={logininfos.password}
                    onChange={setLoginDetails}
                />
              </InnerForm>

              <InnerContent>
                Don't have account?<button onClick={openSignupModal}>Register</button>
              </InnerContent>

              <button>{loading ? "Submitting..." : "Submit"}</button>
            </FormContent>
            <CloseFormButton onClick={handleClose} />
          </FormWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Login;
