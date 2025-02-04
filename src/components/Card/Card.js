import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {
	const dispatch = useDispatch();
	const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

	return (
		<>
			<li className={styles.card}>{props.title}
				<button className={styles.button} onClick={handleToggleFavorite}>
					<span className={clsx(styles.icon, 'fa', props.isFavorite ? 'fa-star' : 'fa-star-o', props.isFavorite && styles.active)} />
				</button>
			</li>
		</>
	);
};

export default Card;