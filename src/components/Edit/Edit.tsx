import './Edit.css';

export function Edit() {
  return (
    <div className="edit-container">
      <h1>Criar agendamento</h1>
      <form className="form">
        <label htmlFor="name">Nome do cliente:</label>
        <input type="text" id="name" placeholder="Ex: Vitória França" />
        <label htmlFor="date">Selecione a Data:</label>
        <input type="date" id="date" />
        <label htmlFor="number">Contato:</label>
        <input type="number" id="number" placeholder="Ex: (00) 000000000" />
        <label htmlFor="service">Serviço</label>
        <select name="service" id="service">
          <option value="" disabled selected>
            Selecione o Serviço
          </option>

          <option value="Completo">Completo</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
        </select>
        <button>Salvar</button>
        <button>Deletar</button>
        <button>Cancelar</button>
      </form>
    </div>
  );
}
