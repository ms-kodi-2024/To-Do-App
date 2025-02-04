import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
	const dispatch = useDispatch();
	const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
	};
	const handleRemove = () => {
    dispatch(removeCard(props.id));
  };

	return (
		<>
			<li className={styles.card}>{props.title}
				<button className={styles.button} onClick={handleToggleFavorite}>
				  <span className={clsx(styles.icon, 'fa', props.isFavorite ? 'fa-star' : 'fa-star-o', props.isFavorite && styles.active)} />
				  <span className={'fa fa-trash'} onClick={handleRemove} />
				</button>
			</li>
		</>
	);
};

export default Card;