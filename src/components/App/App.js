import Hero from '../Hero/Hero.js';
import SearchForm from '../SearchForm/SearchForm.js';
import List from '../List/List.js';
import Container from '../Container/Container.js';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;