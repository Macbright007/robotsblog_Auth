import {
    BgCont,
    CloseFormButton,
    FormCont,
    SignImg,
    Wrapper,
    InnerSignForm,
    InnerCont
  } from "./styles";
  import secure from "../image/secure.svg";

const SignUp = ({  openModal, handleClose }) => {

    return(
        <BgCont>
          <Wrapper>
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
                  //   value={newUploads.title}
                  //   onChange={setUploadsDetails}
                />
                <label htmlFor="lastname">last-name:</label>
                <br />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  //   value={newUploads.title}
                  //   onChange={setUploadsDetails}
                />
                <label htmlFor="username">username:</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  //   value={newUploads.title}
                  //   onChange={setUploadsDetails}
                />
                <label htmlFor="email">email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
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
                <label htmlFor="password2">confirm-password:</label>
                <br />
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  //   value={newUploads.title}
                  //   onChange={setUploadsDetails}
                />
              </InnerSignForm>

              <InnerCont>
                Have account?<button onClick={openModal}>Login</button>
              </InnerCont>

              <button>Submit</button>
            </FormCont>
            <CloseFormButton onClick={handleClose} />
          </Wrapper>
        </BgCont>
    )
}

export default SignUp