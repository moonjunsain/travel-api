const router = require('express').Router()
const locationRoute = require('./location')
const travelerRoute = require('./travelers')
const tripRoute = require('./trips')

router.use('/locations', locationRoute)
router.use('/travelers', travelerRoute)
router.use('/trips', tripRoute)

module.exports = router