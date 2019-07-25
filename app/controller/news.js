const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);

    // const newsList = {
    //   list: [
    //     { avatarUrl: 1, realName: 'this is news 1', type: '/news/1', city: '/news/2' },
    //     { avatarUrl: 2, realName: 'this is news 2', type: '/news/2', city: '/news/2' }
    //   ]
    // };

    await this.ctx.render("news/list.tpl", { list: newsList });
  }
}

module.exports = NewsController;
