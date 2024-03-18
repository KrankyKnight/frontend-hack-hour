import './styles.css';
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </React.Fragment>
  );
}
