import React from 'react';
import { hot } from 'react-hot-loader';
import UserList from './user-list';

const App = () => (
  <div>
    <UserList users={[]} />
  </div>
);

export default hot(module)(App);
