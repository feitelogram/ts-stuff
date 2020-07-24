import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const col = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});

col.on('change', () => {
  const root = document.querySelector('#root');
  new UserList(root, col).render();
});
col.fetch();
