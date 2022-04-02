class HomeController {
  index(req, res, next) {
    return res.json({ message: "Hello, world" });
  }
}

module.exports = new HomeController();
