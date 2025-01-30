import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
			<Container>
				<div className={styles.navContainer}>
					<Link to='/'><span className={styles.icon + ' fa fa-tasks'}></span></Link>
					<ul className={styles.list}>
						<li><Link to="/">Home</Link></li>
					  <li><Link to="/favorite">Favorite</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;