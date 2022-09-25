import logo from "../../logo.svg";
import image from "../../imageHomePage.svg";
import "./style.css";

export const HomePage = ({ setRenderDashboard, renderDashboard }) => {
  return (
    <div className="HomePage-container">
      <div className="HomePage-container-div">
        <img className="HomePage-logo" src={logo} alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>{" "}
        <button
          className="HomePage-container-button"
          type="button"
          onClick={() => setRenderDashboard(!renderDashboard)}
        >
          Iniciar
        </button>
      </div>
      <div className="HomePage-container-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
