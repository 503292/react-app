import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import css from './App.module.scss';

const user = {
  name: 'Kris',
  admin: true,
  val: 1,
};

const App = () => {
  return (
    <div className={css.wrapApp}>
      <header className={css.header}>
        <Header user={user} />
      </header>

      <main className={css.main}>
        <Main />
      </main>
    </div>
  );
};

export default App;
