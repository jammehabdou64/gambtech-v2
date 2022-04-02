class WelcomeController {
  index(req, res, next) {
    return res.json({ message: "Hello, Admin" });
  }
}

module.exports = new WelcomeController();
