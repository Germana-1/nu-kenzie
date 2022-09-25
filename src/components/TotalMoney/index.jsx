import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const reduce = () =>
    listTransactions.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0
    );

  return (
    <div className="TotalMoney-container">
      <h3>Valor total:</h3>
      <p>O valor se refere ao saldo</p>
      <span>
        {reduce().toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );
};
