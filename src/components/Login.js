import {
  Background,
  CloseFormButton,
  FormContent,
  FormImg,
  FormWrapper,
  InnerForm,
  InnerContent
} from "./styles";
// import secure from "../image/secure.svg";
import login from "../image/login.svg";
// import {Link } from "react-router-dom"

const Login = ({ openSignupModal, showModal, handleClose }) => {


  return (
    <>
      {showModal ? (
        <Background>
          <FormWrapper showModal={showModal}>
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
                  //   value={newUploads.title}
                  //   onChange={setUploadsDetails}
                />
                <label htmlFor="password">password:</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  //   value={newUploads.title}
                  //   onChange={setUploadsDetails}
                />
              </InnerForm>

              <InnerContent>
                Don't have account?<button onClick={openSignupModal}>Register</button>
              </InnerContent>

              <button>Submit</button>
            </FormContent>
            <CloseFormButton onClick={handleClose} />
          </FormWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Login;
