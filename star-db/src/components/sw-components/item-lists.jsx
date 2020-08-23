import ItemList from '../Item-list';
import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

const mapMethodToPerson = (swapiService) => ({ getData: swapiService.getAllPeople });
const mapMethodToPlanet = (swapiService) => ({ getData: swapiService.getAllPlanets });
const mapMethodToStarship = (swapiService) => ({ getData: swapiService.getAllStarships });

const PersonList = withSwapiService(mapMethodToPerson)(
  withData(withChildFunction((i) => `${i.name}, ${i.birthYear}`)(ItemList)),
);

const PlanetList = withSwapiService(mapMethodToPlanet)(
  withData(withChildFunction((i) => `${i.name}`)(ItemList)),
);

const StarshipList = withSwapiService(mapMethodToStarship)(
  withData(withChildFunction((i) => `${i.name}  (${i.model})`)(ItemList)),
);

export { PlanetList, PersonList, StarshipList };
