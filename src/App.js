import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Router from "./components/router/Router";
import HomeworkHelpTheme from "./themes/HomeworkHelpTheme";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={HomeworkHelpTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
