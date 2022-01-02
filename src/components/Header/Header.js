import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { CartContext } from '../../Routes';
import styles from "./styles.module.css";

function Header() {

  const { isAuthenticated, setIsAuthenticated } = useContext(CartContext);


  const onLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", false);
  }


  return (
    <header>
      <ul>
        <Link to="/"><li>access_</li></Link>
        <Link to="/cart"><li>cart</li></Link>
        {isAuthenticated ? <Button variant='contained' color='error' onClick={onLogout}>Logout</Button> :
        <Link to="/authentication"><li>login/signup</li></Link>}
      </ul>
    </header>
  );
}

export default Header;
