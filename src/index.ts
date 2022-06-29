import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

const users = User.buildUserCollection();
users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();
