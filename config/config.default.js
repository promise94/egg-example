const appid = 100264;
const secret = "f17fea13dd554a238c5e501c161b8523";

exports.keys = "xiaowei";

exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks"
  }
};

exports.news = {
  appid,
  secret,
  pageSize: 5,
  serverUrl: "http://route.showapi.com/341-1"
};
