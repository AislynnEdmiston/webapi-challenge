const projectModel = require('../data/helpers/projectModel')
const projectModelRouter = require('express').Router()

async function getAllProjects(req, res){
    try {
        const projects = await projectModel.find()
        res.json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getProjectById(req, res){
    try {
        const project = await projectModel.get(id)
        res.json(project[0])
    } catch (error) {
        res.status(500).json(error)
    }
}


projectModelRouter
    .get('/', getAllProjects)
    .get('/:id', getProjectById)

module.exports = projectModelRouter