import './Create.css';

export function Create() {
  return (
    <div className="create-container">
      <h1>Criar agendamento</h1>
      <form className="form">
        <label htmlFor="name">Nome do cliente:</label>
        <input type="text" id="name" placeholder="Ex: Vitória França" />
        <label htmlFor="date">Selecione a data:</label>
        <input type="date" id="date" />
        <label htmlFor="number">Contato:</label>
        <input type="number" id="number" placeholder="Ex: (00) 000000000" />
        <label htmlFor="service">Selecione o serviço</label>
        <select name="service" id="service">
          <option disabled selected>
            Selecione o Serviço
          </option>
          <option value="Completo">Completo</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
        </select>
        <button>Verificar Agenda</button>
      </form>
    </div>
  );
}
