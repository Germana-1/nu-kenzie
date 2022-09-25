import { Card } from "../Card";
import rectangle from "../../rectangle.svg";
import "./style.css";

export const List = ({ listTransactions, setListTransactions }) => {
  const removeTransaction = (id) => {
    const newListTransactions = listTransactions.filter(
      (transaction) => transaction.description !== id
    );
    setListTransactions(newListTransactions);
  };
  return (
    <>
      {listTransactions.length === 0 ? (
        <>
          <h3 className="List-h3">Você ainda não possui nenhum lançamento</h3>
          <img src={rectangle} alt="" />
          <img src={rectangle} alt="" />
          <img src={rectangle} alt="" />
        </>
      ) : (
        <ul>
          {listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              id={transaction.description}
              removeTransaction={removeTransaction}
            />
          ))}
        </ul>
      )}
    </>
  );
};
