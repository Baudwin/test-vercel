const router = require('express').Router()
const {getHome, testCloudinary, checkSomething} = require('../controllers/testController')
const upload = require('../multer')

router.get("/", getHome)
router.post("/test-cloud",upload.single("item"), testCloudinary)

module.exports = router