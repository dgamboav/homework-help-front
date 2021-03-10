import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Router from "./components/router/Router";
import HomeworkHelpTheme from "./themes/HomeworkHelpTheme";

function App() {
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(window.onload);
    // if(!window.onload)
  }, []);

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
