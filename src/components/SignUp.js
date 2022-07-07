import {
  BgCont,
  CloseFormButton,
  FormCont,
  SignImg,
  Wrapper,
  InnerSignForm,
  InnerCont,
} from "./styles";
import secure from "../image/secure.svg";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { URL } from "./Home";


// initializing user values
const userInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  password2: "",
};


const SignUp = ({ openModal, handleClose }) => {
  const [userinfos, setUserInfos] = useState(userInitialValues);
  const [loading, setLoading] = useState(false);

  //used to redirect to home page
  // let navigate = useNavigate();

  // fucntion to get user details
  const setUserDetails = async (e) => {
    setUserInfos({ ...userinfos, [e.target.name]: e.target.value });
  };

  // function to submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.post(URL+ "/register", userinfos);

      if (result?.status === 200) {
        setLoading(false);
        openModal();
      }
    } catch {
      console.log("failed to register");
    }
    setUserInfos(userInitialValues);
  };

  return (
    <BgCont>
      <Wrapper onSubmit={handleSubmit}>
        <SignImg src={secure} alt="pic" />
        <FormCont>
          <h1>Sign Up</h1>
          <InnerSignForm>
            <label htmlFor="firstname">first-name:</label>
            <br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userinfos.firstname}
              onChange={setUserDetails}
            />
            <label htmlFor="lastname">last-name:</label>
            <br />
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={userinfos.lastname}
              onChange={setUserDetails}
            />
            <label htmlFor="username">username:</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={userinfos.username}
              onChange={setUserDetails}
            />
            <label htmlFor="email">email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={userinfos.email}
              onChange={setUserDetails}
            />
            <label htmlFor="password">password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={userinfos.password}
              onChange={setUserDetails}
            />
            <label htmlFor="password2">confirm-password:</label>
            <br />
            <input
              type="password"
              id="password2"
              name="password2"
              value={userinfos.password2}
              onChange={setUserDetails}
            />
          </InnerSignForm>

          <InnerCont>
            Already have account?<button onClick={openModal}>Login</button>
          </InnerCont>

          <button>{loading ? "Submitting..." : "Submit"}</button>
          {/* <button>Submit</button> */}
        </FormCont>
        <CloseFormButton onClick={handleClose} />
      </Wrapper>
    </BgCont>
  );
};

export default SignUp;
