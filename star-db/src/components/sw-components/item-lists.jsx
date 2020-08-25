import ItemList from '../Item-list';
import { withData, withChildFunction, withSwapiService, compose } from '../hoc-helpers';

const mapMethodToPerson = (swapiService) => ({ getData: swapiService.getAllPeople });
const mapMethodToPlanet = (swapiService) => ({ getData: swapiService.getAllPlanets });
const mapMethodToStarship = (swapiService) => ({ getData: swapiService.getAllStarships });

const PersonList = compose(
  withSwapiService(mapMethodToPerson),
  withData,
  withChildFunction((i) => `${i.name}, ${i.birthYear}`),
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapMethodToPlanet),
  withData,
  withChildFunction((i) => `${i.name}`),
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapMethodToStarship),
  withData,
  withChildFunction((i) => `${i.name} ${i.model}`),
)(ItemList);

export { PlanetList, PersonList, StarshipList };
