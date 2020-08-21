import ItemList from '../Item-list';
import { withData, withChildFunction } from '../hoc-helpers';
import SwapiService from '../../services/swapi.service';

const swapiService = new SwapiService();

const { getAllPlanets, getAllStarships, getAllPeople } = swapiService;

const PersonList = withData(
  withChildFunction(ItemList, (i) => `${i.name}, ${i.birthYear}`),
  getAllPeople,
);
const PlanetList = withData(
  withChildFunction(ItemList, (i) => `${i.name}`),
  getAllPlanets,
);
const StarshipList = withData(
  withChildFunction(ItemList, (i) => `${i.name}  (${i.model})`),
  getAllStarships,
);

export { PlanetList, PersonList, StarshipList };
