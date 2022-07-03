import {users} from "./models/usersInfo.js";
import './dbConnector.js';

export default class UserOps {

  async addUser(body) {
    let data = {
      UserName: body.name,
      Password: body.pw,
      City: body.city
    };
    console.log(data);
    await users.create(data);
  }


  getUsers = async function () {
    return users.find({});
  }

}
