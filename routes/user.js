const router = require('express').Router()
const {getHome} = require('../controllers/testController')
const upload = require('../multer')

router.get("/", getHome)
router.post("/test-cloud",upload.single("item"))

module.exports = router