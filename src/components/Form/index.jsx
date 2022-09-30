import { useState } from "react";
import { toast } from "react-toastify";
import "./style.css";

export const Form = ({
  listTransactions,
  setListTransactions,
  setListTransactionsFiltered,
}) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState(0);

  const treatedValue = type === "entrada" ? Number(value) : Number(-value);

  function handleSubmit(event) {
    event.preventDefault();

    value < 0
      ? toast.error('Insira um valor positivo no campo "Valor"')
      : setListTransactions(() => [
          ...listTransactions,
          { description: description, type: type, value: treatedValue },
        ]);

    setDescription("");
    setValue(0);
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        className="Form-input"
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <p>Ex: Compra de roupas</p>

      <div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            className="Form-input"
            type="text"
            id="value"
            placeholder="1"
            value={value !== 0 ? value : ""}
            onChange={(event) => setValue(event.target.value)}
          />
          <span>R$</span>
        </div>

        <div>
          <label htmlFor="type">Tipo de valor</label>
          <select
            className="Form-input"
            name=""
            id="type"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Despesa</option>
          </select>
        </div>
      </div>

      <button
        className="Form-button"
        type="submit"
        onClick={() => setListTransactionsFiltered([])}
      >
        Inserir
      </button>
    </form>
  );
};
