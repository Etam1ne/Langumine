import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Import } from "./pages/Import";
import { Cards } from "./pages/LearnCards";
import { store } from "./pages/store";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./GlobalStyles.style";

const theme = {
  colors: {
    green: "#116530",
    lightGreen: "#A3EBB1",
    lightestGreen: "#edfbef",
    red: "#ffdde5"
  }
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
    
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="cards" element={<Cards />}/>
            <Route path="import" element={<Import />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Route>
        </Routes>
        </ThemeProvider>
    </Provider>
  );
}

export default App;
