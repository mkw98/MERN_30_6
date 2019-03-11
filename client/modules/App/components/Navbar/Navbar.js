import React from 'react';
import { Link } from 'react-router';

import styles from './Navbar.css';

export function Navbar() {
  return (
    <div className={styles.navbar}>
        <ul>
        	<li><Link to="/home">
            	<p className={styles.navbar_text}>Home</p>
        	</Link></li>
        	<li><Link to="/">
            	<p className={styles.navbar_text}>Posts</p>
        	</Link></li>
        	<li><Link to="/about">
            	<p className={styles.navbar_text}>About</p>
        	</Link></li>
        </ul>
    </div>
  );
}
export default Navbar;