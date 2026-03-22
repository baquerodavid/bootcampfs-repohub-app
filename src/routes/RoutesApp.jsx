import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import RepoDetail from "../pages/RepoDetail/RepoDetail";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RoutesApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/bootcamp-repos/:_id"
          element={<RepoDetail />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default RoutesApp;