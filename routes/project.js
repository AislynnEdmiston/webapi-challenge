const projectModel = require('../data/helpers/projectModel')
const projectModelRouter = require('express').Router()

async function getAllProjects(req, res){
    try {
        const projects = await projectModel.get()
        res.json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
}


projectModelRouter
    .get('/', getAllProjects)

module.exports = projectModelRouter