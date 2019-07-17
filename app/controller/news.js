const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: "new 1", url: "/news/1" },
        { id: 1, title: "new 2", url: "/news/2" }
      ]
    };

    await this.ctx.render("news/list.tpl", dataList);
  }
}


module.exports = NewsController;