import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <ul>
        <Link to="/"><li>access_</li></Link>
        <Link to="/cart"><li>cart</li></Link>
        <Link to="/authentication"><li>login/signup</li></Link>
      </ul>
    </header>
  );
}

export default Header;
