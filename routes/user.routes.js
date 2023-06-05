
const router = require("express").Router();

const { getAllUsers, getOneUser, saveUser, editOneUser, deleteUser, addFav } = require("../controllers/user.controllers")

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.post("/saveUser", saveUser)

router.put("/editProfile/:user_id", editOneUser)


router.put(":user_id/favorite/:bible_id", addFav) // arreglar

router.delete("/deleteUser/:user_id", deleteUser)


module.exports = router;
