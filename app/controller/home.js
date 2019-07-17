const egg = require("egg");
const Controller = egg.Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "hello world";
  }
}

module.exports = HomeController;
