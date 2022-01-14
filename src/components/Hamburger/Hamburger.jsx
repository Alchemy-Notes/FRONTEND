import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hamburger.css';
import hamburgermenu from '../../../public/assets/hamburgerwhite.png';
import { render } from 'react-dom';

export default class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e) {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div>
            <button onClick={this.showMenu} className={styles.menubtn}>
              <img src={hamburgermenu} className={styles.menuicon} />
            </button>
          </div>
          {this.state.showMenu ? (
            <ul
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/notes">Notes</Link>
              </li>
              <li>
                <Link to="/notes/new">New Note</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/login">Log Out</Link>
              </li>
            </ul>
          ) : null}
        </nav>
      </header>
    );
  }
}
