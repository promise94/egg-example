const egg = require("egg");

const Service = egg.Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;
    const { appid, secret } = this.config.api;

    const { data } = await this.ctx.curl(`${serverUrl}`, {
      data: {
        showapi_appid: appid,
        showapi_sign: secret,
        count: pageSize
      },
      dataType: "json"
    });

    /*   console.log("data--------");
    console.log(data);
    console.log("-------------------------------"); */

    const result = data.showapi_res_body.data;
    return result.map(item => {
      item.time = Date.now();
      return item;
    });
  }
}

module.exports = NewsService;
