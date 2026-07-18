import { Route, Routes } from "react-router-dom";
import Main from "./Components/main/Main";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
