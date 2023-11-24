//1º PRECISO importar o arquivo de modulo
const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static async login(request, response) {
    const { email, password } = request.body;

    const ifUserExists = User.findOne({ where: email });
    console.log(ifUserExists);

    if (ifUserExists) {
      // const passwordIsValid = await bcrypt.compare(password, ifUserExists.password);
    }

    return response.render("auth/login");
  }
  static register(request, response) {
    return response.render("auth/register");
  }

  static async registerPost(request, response) {
    const { name, email, password } = request.body;

    const register = await User.create({ name, email, password });

    try {
      if (register) {
        request.flash("login", `${register.dataValues.name}`);
        return response.render("auth/register");
      }
    } catch (error) {
      console.error(error);
    }
  }
};
