import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoritesCard } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {
	const cards = useSelector(state => getFavoritesCard(state));

	return (
		<div>
			<PageTitle>Favorite</PageTitle>
			<section className={styles.wrapper}>
				<article className={styles.column}>
					{cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
				</article>
			</section>
		</div>
	)
};

export default Favorite;