import {
  Background,
  CloseFormButton,
  FormContent,
  FormImg,
  FormWrapper,
  InnerForm,
  InnerContent
} from "./styles";
import login from "../image/login.svg";


// initializing login values
const loginInitialValues = {
  username: "",
  password: ""
};

const Login = ({ openSignupModal, showModal,  onLoginSuccess, handleClose }) => {

  const [logininfos, setLoginInfos] = useState(loginInitialValues);
  const [loading, setLoading] = useState(false);

  //used to redirect to home page
  // let navigate = useNavigate();

  // fucntion to get user details
  const setLoginDetails = async (e) => {
    setLoginInfos({ ...logininfos, [e.target.name]: e.target.value });
  };

  // function to submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.post(URL+ "/register", userinfos);

      if (result?.status === 200) {
        setLoading(false);
        onLoginSuccess()
      }
    } catch {
      console.log("failed to register");
    }
    setUserInfos(loginInitialValues);
  };

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
