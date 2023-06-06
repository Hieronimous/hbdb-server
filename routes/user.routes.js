
const router = require("express").Router();

const { getAllUsers, getOneUser, saveUser, editOneUser, deleteUser, addFav, deleteFav } = require("../controllers/user.controllers")

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.post("/saveUser", saveUser)

router.put("/editProfile/:user_id", editOneUser)


router.put("/favorite/:user_id/:bible_id", addFav)

router.put("/deletefavorite/:user_id/:bible_id", deleteFav)

router.delete("/deleteUser/:user_id", deleteUser)


module.exports = router;
