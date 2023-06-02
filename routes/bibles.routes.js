const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");


const { getAllBibles, getOneBible, saveBible, editOneBible, deleteBible } = require("../controllers/bibles.controllers")

router.get("/getAllBibles", getAllBibles)

router.get("/getOneBible/:bible_id", getOneBible)

router.post("/saveBible", isAuthenticated, saveBible)

router.put("/edit/:bible_id", isAuthenticated, editOneBible)

router.delete("/deleteBible/:bible_id", isAuthenticated, deleteBible)


module.exports = router;
