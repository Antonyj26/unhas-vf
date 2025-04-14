import './List.css';

export function List() {
  return (
    <div className="list-container">
      <h1>Listar Agendamentos</h1>
      <form>
        <button>Novo Agendamento</button>
        <input type="date" />
        <textarea name="" id="" placeholder="5:00 ---------------"></textarea>
      </form>
    </div>
  );
}
