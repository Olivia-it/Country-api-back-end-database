const Country = require('../models/Country')

async function index (req, res) {
    try{
    const countries = await Country.getAll()
    res.status(200).json(countries)
} catch (err) {
    res.status(500).json({error: err.message})
}
}

async function show(req, res) {
try{
    console.log('1');
    let name = req.params.name
    const country = await Country.getOneCountryByName(name)
    res.status(200).json(country)
} 
catch (err){
    console.log('controller error');
    res.status(404).json({error: err.message})
}
}


async function create(req, res) {
    try{
        const data = req.body
        const newCountry = await Country.create(data)
        res.status(201).json(newCountry)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

async function destroy(req, res){
    try{
        const name = req.params.name
        const country = await Country.getOneCountryByName(name)
        const result = await country.destroy()
        res.status(404).end()
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}

// async function update(req, res){
//     try{
//         const name = req.params.name
//         const country = await Country.getOneCountryByName(name)
//         const result = await country.update()
//         res.status(200).json(newCountry)
//     }
// }

module.exports = {index, show, create, destroy}