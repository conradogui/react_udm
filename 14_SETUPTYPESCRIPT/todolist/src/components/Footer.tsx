import styles from "./Footer.module.css"
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>React + TS todo</span> @ 2024
        </p>
      </footer>
    </div>
  );
};

export default Footer;
