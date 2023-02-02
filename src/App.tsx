import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Grammar from "./pages/Grammar";
import Cards from "./pages/Cards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="cards" element={<Cards />}/>
        <Route path="grammar" element={<Grammar />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
