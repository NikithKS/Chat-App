import {cities} from "./models/cities.js";
import './dbConnector.js';

export class CityOps {

  getCities = async function () {
    return cities.find({}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
