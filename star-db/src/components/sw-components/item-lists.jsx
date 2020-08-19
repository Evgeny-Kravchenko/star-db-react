import ItemList from '../Item-list';
import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi.service';

const swapiService = new SwapiService();

const { getAllPlanets, getAllStarships, getAllPeople } = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export { PlanetList, PersonList, StarshipList };
