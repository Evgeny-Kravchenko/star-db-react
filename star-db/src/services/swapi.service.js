export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  _apiImageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    const imageUrl = await this.getImagePerson(id);
    return this._transformPerson({ ...person, imageUrl });
  };

  getImagePerson = (id) => {
    return fetch(`${this._apiImageBase}/characters/${id}.jpg`)
      .then((image) => {
        if (image.status === 200) {
          return image.url;
        }
        return '/assets/images/not-found-person.jpg';
      })
      .catch(() => {
        return '/assets/images/not-found-starship.jpg';
      });
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      imageUrl: person.imageUrl,
    };
  };

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    const imageUrl = await this.getImagePlanet(id);
    return this._transformPlanet({ ...planet, imageUrl });
  };

  getImagePlanet = (id) => {
    return fetch(`${this._apiImageBase}/planets/${id}.jpg`)
      .then((image) => {
        if (image.status === 200) {
          return image.url;
        }
        return '/assets/images/not-found-planet.jpg';
      })
      .catch(() => {
        return '/assets/images/not-found-starship.jpg';
      });
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imageUrl: planet.imageUrl,
    };
  };

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    const imageUrl = await this.getImageStarship(id);
    return this._transformStarship({ ...starship, imageUrl });
  };

  getImageStarship = async (id) => {
    return fetch(`${this._apiImageBase}/starships/${id}.jpg`)
      .then((image) => {
        if (image.status === 200) {
          return image.url;
        }
        return '/assets/images/not-found-starship.jpg';
      })
      .catch(() => {
        return '/assets/images/not-found-starship.jpg';
      });
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
      imageUrl: starship.imageUrl,
    };
  };
}
