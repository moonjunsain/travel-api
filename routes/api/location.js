const {Location, Trip, Traveler} = require('../../model/index.js')
const router = require('express').Router()

router.get('/', async (req, res) => {
    try{
        const data = await Location.findAll({include: [{model: Traveler}]})
        res.status(200).json(data)

    }catch(err){
        return res.status(500).json({message: 'Internal Server Error', error: err})
    }
})

router.post('/', async (req, res) => {
    try{
        const data = await Location.create(req.body)
        res.status(200).json({message: "Create success", createdData: data})
    }catch(err){
        return res.status(500).json({message: 'Internal Server Error', error: err})
    }
})

router.get('/:id', async (req, res) => {
    
})


module.exports = router