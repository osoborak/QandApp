/**@jsx jsx */ // tells babel to transform jsx to javascript
import { css, jsx } from "@emotion/core";
import React from "react";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { BrowserRouter, Route } from "react-router-dom";
import { AskPage } from "./AskPage";
import { SearchPage } from "./SearchPage";
import { SignInPage } from "./SignInPage";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/ask" component={AskPage} />
        <Route path="/signin" component={SignInPage} />
      </div>
    </BrowserRouter>
  );
};
export default App;
