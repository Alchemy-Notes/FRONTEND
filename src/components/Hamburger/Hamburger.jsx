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

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      window.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    if (this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        window.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div>
            <button className={styles.menubtn} onClick={this.showMenu}>
              <img src={hamburgermenu} className={styles.menuicon} />
            </button>
          </div>
          {this.state.showMenu ? (
            <div
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <Link to="/">
                <button>Home</button>
              </Link>

              <Link to="/notes">
                <button>Notes</button>
              </Link>

              <Link to="/notes/new">
                <button>New Note</button>
              </Link>

              <Link to="/about">
                <button>About Us</button>
              </Link>

              <Link to="/login">
                <button>Log Out</button>
              </Link>
            </div>
          ) : null}
        </nav>
      </header>
    );
  }
}
