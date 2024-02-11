const router = require("express").Router();
const register_controller = require("../controller/user_register");

router.post("/user-register", register_controller.register);
// router.get("/decode-token", register_controller.decode_token);


module.exports = router;