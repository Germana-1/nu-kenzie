import logo from "../../nu-kenzie.svg";
import "./style.css";
import { useState } from "react";
import { Form } from "../Form";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DashboardPage = ({ setRenderDashboard, renderDashboard }) => {
  const [listTransactions, setListTransactions] = useState([]);
  const [listTransactionsFiltered, setListTransactionsFiltered] = useState([]);

  const filterListTransactions = (type) => {
    setListTransactionsFiltered([]);
    const newListTransactions = listTransactions.filter(
      (transaction) => transaction.type === type
    );

    setListTransactionsFiltered(newListTransactions);
  };

  const all = () => {
    setListTransactionsFiltered([]);
  };

  return (
    <>
      <header className="DashboardPage-header">
        <img className="DashboardPage-logo" src={logo} alt="" />
        <button
          type="button"
          onClick={() => setRenderDashboard(!renderDashboard)}
        >
          Inicio
        </button>
      </header>
      <main className="DashboardPage-main">
        <div className="DashboardPage-container-form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setListTransactionsFiltered={setListTransactionsFiltered}
          />
          {listTransactions.length !== 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </div>
        <div className="DashboardPage-container-list">
          <div className="DashboardPage-container-nav">
            <h2>Resumo financeiro</h2>
            <nav>
              <button onClick={() => all()}>Todos</button>
              <button onClick={() => filterListTransactions("entrada")}>
                Entradas
              </button>
              <button onClick={() => filterListTransactions("saída")}>
                Despesas
              </button>
            </nav>
          </div>

          <List
            listTransactions={
              listTransactionsFiltered.length !== 0
                ? listTransactionsFiltered
                : listTransactions
            }
            setListTransactions={setListTransactions}
          />
        </div>
      </main>
      <ToastContainer />
    </>
  );
};
