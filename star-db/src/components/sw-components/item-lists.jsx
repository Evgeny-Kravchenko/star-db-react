import ItemList from '../Item-list';
import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

const mapMethodToPerson = (swapiService) => ({ getData: swapiService.getAllPeople });
const mapMethodToPlanet = (swapiService) => ({ getData: swapiService.getAllPlanets });
const mapMethodToStarship = (swapiService) => ({ getData: swapiService.getAllStarships });

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, (i) => `${i.name}, ${i.birthYear}`)),
  mapMethodToPerson,
);
const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, (i) => `${i.name}`)),
  mapMethodToPlanet,
);

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, (i) => `${i.name}  (${i.model})`)),
  mapMethodToStarship,
);

export { PlanetList, PersonList, StarshipList };
