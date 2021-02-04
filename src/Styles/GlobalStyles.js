import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import CookieRunBlack from "./Font/CookieRun Black.ttf";
import CookieRunBold from "./Font/CookieRun Bold.ttf";
import CookieRunRegular from "./Font/CookieRun Regular.ttf";

export default createGlobalStyle`
  ${reset};

  @font-face {
    font-family:'CookieRunBlack';
    src: url(${CookieRunBlack}) format("ttf");
  }
  @font-face {
    font-family:'CookieRunBold';
    src: url(${CookieRunBold}) format("ttf");
  }
  @font-face {
    font-family:'CookieRunRegular';
    src: url(${CookieRunRegular}) format("ttf");
  }

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
