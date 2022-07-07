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

export const FormWrapper = styled.form`
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

export const Form = styled.form`
border: 2px solid rgba(2, 2, 70, 0.8);
border-left: 0;
border-right: 0;
border-radius: 25px;
right: 50px;
width: 100%;
max-width: 300px;
margin: 30px auto;
height: 70vh;
padding: 20px;


button{
    width:100%;
    max-width: 250px;
    margin: 15px 40px;
    padding: 10px;
    background: rgba(2, 2, 70, 0.8);
    color: white;
    font-weight: 700;
    border: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
button:hover{
    cursor: pointer;
    background: rgb(151, 87, 206);
}
`

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

export const Wrapper = styled.form`
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

// styling for navbar
export const Navitems = styled.div`
    border: 2px solid black;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    text-align: center;
    padding: 10px;
    position: fixed; 
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(25, 25, 25, 0.679);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    
    a{
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0px 30px;
    }
`
// styling for card component
export const Card = styled.div`
    background: rgba(2, 2, 70, 0.359);
    width: 100%;
    max-width: 500px;
    margin: 30px auto;
    border: 3px solid black;
    border-left: 0;
    border-right: 0;
    border-radius: 15px;
    padding: 10px; 
`;

export const Heading = styled.h4`
    font-family: 'Handlee', cursive;
    font-size: 17px;
    font-style: italic;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
 `;

export const Paragraph = styled.p`
    font-family: 'Handlee', cursive;
    font-size: 17px;
    // text-transform: italics;
 `;