const Trip = require('./tripModel')
const Location = require('./locationModel')
const Traveler = require('./travelerModel')

Location.belongsToMany(Traveler, {through: Trip})

Traveler.belongsToMany(Location, {through: Trip})

module.exports = {
    Location, Traveler, Trip
}