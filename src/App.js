import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Router from "./components/router/Router";
import HomeworkHelpTheme from "./themes/HomeworkHelpTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={HomeworkHelpTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
