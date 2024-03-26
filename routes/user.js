const router = require('express').Router()
const {getHome} = require('../controllers/testController')


router.get("/", getHome)



module.exports = router