const { ApiRoute, getApiController, asyncHandler } = require("gambtech-lib");

const HomeController = getApiController("HomeController");

ApiRoute.get("/", HomeController.index);
