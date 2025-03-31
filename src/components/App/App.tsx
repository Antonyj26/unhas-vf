import { Create } from '../Create';
import { Edit } from '../Edit';
import { List } from '../List';
import { FC, useState } from 'react';
type States = 'list' | 'create' | 'edit';

const routes: Record<States, FC> = {
  list: List,
  create: Create,
  edit: Edit,
};
export function App() {
  const [state, setState] = useState<States>('edit');

  const Router = routes[state];

  return (
    <div>
      <Router />
      <button onClick={() => setState('list')}>List</button>
      <button onClick={() => setState('create')}>Create</button>
      <button onClick={() => setState('edit')}>Edit</button>
    </div>
  );
}
