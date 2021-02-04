import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};

 *{
  box-sizing: border-box;
  }

  body {
    background-color:${props => props.theme.white};
    color:${props => props.theme.black};
    }
  a {
    text-decoration:none;
  }
  input:focus{
    outline:none;
  }
  a:hover{
    text-decoration:none;
  }
`;
