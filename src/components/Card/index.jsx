import { FaTrash } from "react-icons/fa";
import "./style.css";

export const Card = ({ transaction, id, removeTransaction }) => {
  return (
    <li
      style={{
        borderLeft: transaction.type === "entrada" && "4px solid #03B898",
      }}
    >
      <h3>{transaction.description}</h3>
      <span className="type">
        {transaction.type === "entrada" ? "Entrada" : "Despesa"}
      </span>
      <span>
        {transaction.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button className="button" onClick={() => removeTransaction(id)}>
        <FaTrash />
      </button>
    </li>
  );
};
