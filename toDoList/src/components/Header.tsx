import React from 'react';
import rocket from "../img/rocket.svg";
import HeaderStyle from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.navBar}>
        <nav>
          <img src={rocket} alt="Foguete do ToDo" />
          <section>
            <h1>
              <span>to</span>do
            </h1>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
