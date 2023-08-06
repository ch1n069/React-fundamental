import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Ima the header</h1>
      <button>
        <Link to="/cart">cart</Link>
      </button>
    </div>
  );
};

export default Header;
