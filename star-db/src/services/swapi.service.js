export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  _transformPerson = (person) => {
    return {
      id: person.id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  };

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    const imageUrl = await this.getImagePlanet(id);
    return this._transformPlanet({ ...planet, imageUrl, id });
  }

  getImagePlanet = (id) => {
    return fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`).then((image) => {
      if (image.status === 200) {
        return image.url;
      }
      return './assets/images/not-found-planet.jpg';
    });
  };

  _transformPlanet = (planet) => {
    return {
      id: planet.id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imageUrl: planet.imageUrl,
    };
  };

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _transformStarship = (starship) => {
    return {
      id: starship.id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };
}
