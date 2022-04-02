const { AdminRoute, getAdminController } = require("gambetech-lib");
const WelcomeController = getAdminController("WelcomeController");

AdminRoute.get("/", WelcomeController.index);
