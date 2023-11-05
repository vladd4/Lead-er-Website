import "../styles/App.scss";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import WhyUs from "./WhyUs/WhyUs";
import WorkWith from "./WorkWith/WorkWith";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import ToTop from "./ToTop";
import Loader from "./Loader";
import Etaps from "./Etaps/Etaps";

import { useTranslation } from "react-i18next";
import Context from "../hooks/Context";

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <Context.Provider value={t}>
      <div className="App">
        <Loader />
        <Header i18n={i18n} />
        <Welcome />
        <AboutUs />
        <WhyUs />
        <WorkWith />
        <Etaps />
        <Form />
        <Footer />
        <ToTop />
      </div>
    </Context.Provider>
  );
};

export default App;
