const db = require("../db/connect");

class Country {
  constructor({
    country_id,
    name,
    capital,
    population,
    languages,
    fun_fact,
    map_image_url,
  }) {
    this.country_id = country_id;
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.languages = languages;
    this.fun_fact = fun_fact;
    this.map_image_url = map_image_url;
  }
  static async getAll() {
    const response = await db.query("SELECT name, capital FROM country;");
    if (response.rows.length === 0) {
      throw new Error("");
    }
    return response.rows.map((c) => new Country(c));
  }

  static async getOneCountryByName(countryName) {
    console.log('step1');
    const response = await db.query("SELECT name, capital FROM country WHERE LOWER(name) = LOWER($1);",[countryName]);
    console.log('step2');
    if (response.rows.length !== 1) {
      console.log("step 3");
      throw new Error("Unable to find country");
      
    }
    return new Country(response.rows[0]);
  }

  static async create(data) {
    //data will be put in the body of the request
    const { name, capital, population, languages } = data;
    const existingCountry = await db.query(
      "SELECT name FROM country WHERE LOWER(name) = LOWER($1);",
      [name]
    );
    if (existingCountry.rows.length === 0) {
      let response = await db.query(
        "INSERT INTO country(name, capital, population, languages) VALUES ($1, $2, $3, $4) RETURNING *;",
        [name, capital, population, languages]
      );
      return new Country(response.rows[0]);
    } else {
      throw new Error("Country already exists");
    }
  }

  async destroy() {
    let response = await db.query(
      "DELETE FROM country WHERE name = $1 REturning *;",
      [this.name]
    );
    return new Country(response.rows([0]));
  }
}

module.exports = Country;
