import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: cursive;

  h1 {
    font-size: 3rem;
    text-align: center;
    width: 70%;
  }
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  background-color: #141414;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-family: cursive;
`;

// styling for login forms
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 800px;
  height: 80vh;
  padding: 2px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const FormImg = styled.img`
  width: 100%;
  height: 80vh;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  background: white;

  h1 {
    font-size: 2rem;
  }

  button {
    padding: 10px 30px;
    background: #141414;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  }
`;
export const InnerForm = styled.div`
  padding: 5px;

  label {
    font-weight: 700;
  }
  input[type="text"] {
    border-radius: 7px;
    border: 2px solid #141414;
    padding: 10px;
    width: 100%;
    margin: 7px 0px;
  }
  input[type="password"] {
    border-radius: 7px;
    border: 2px solid #141414;
    padding: 10px;
    width: 100%;
    margin-top: 7px;
  }
  input:focus {
    outline: none;
  }
`;

export const InnerContent = styled.div`
  button {
    color: blue;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    background: transparent;
  }
  button:hover {
    font-weight: 700;
  }
`;
export const CloseFormButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
// style for sign up form
export const BgCont = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 800px;
  height: 80vh;
  padding: 2px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const SignImg = styled.img`
  width: 100%;
  height: 80vh;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  overflow-y: auto;

  h1 {
    font-size: 1.7rem;
    margin-top: 10rem;
  }

  button {
    padding: 10px 30px;
    background: #141414;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin: 10px 0px;
    cursor: pointer;
  }
`;
export const InnerSignForm = styled.div`
  
  label {
    font-weight: 700;
  }
  input[type="text"] {
    border-radius: 7px;
    border: 2px solid #141414;
    padding: 10px;
    width: 100%;
    margin: 7px 0px;
  }
  input[type="password"] {
    border-radius: 7px;
    border: 2px solid #141414;
    padding: 10px;
    width: 100%;
    margin-top: 7px;
  }
  input[type="email"] {
    border-radius: 7px;
    border: 2px solid #141414;
    padding: 10px;
    width: 100%;
    margin-top: 7px;
  }
  input:focus {
    outline: none;
  }
`;

export const InnerCont = styled.div`
  button {
    color: blue;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    background: transparent;
  }
  button:hover {
    font-weight: 700;
  }
`;
