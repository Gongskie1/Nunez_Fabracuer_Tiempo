const router = require("express").Router();
const weather_controller = require("../controller/weather");


router.get("/weather", weather_controller.weather);
router.get("/getWeather", weather_controller.getWeather)


module.exports = router;