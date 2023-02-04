import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Import from "./pages/Grammar";
import Cards from "./pages/Cards";
import { store } from "./pages/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="cards" element={<Cards />}/>
          <Route path="import" element={<Import />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
