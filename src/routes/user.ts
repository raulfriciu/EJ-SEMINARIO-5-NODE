import express from 'express'
import * as userServices from '../services/userServices'

//import toNewUser from '../extras/utils'

const router = express.Router()

router.get('/', async(_req, res) => {
    const data = await userServices.getEntries.getAll()
    return res.json(data);
})

router.get('/:id', async(req, res) => {
    const data = await userServices.getEntries.findById(req.params.id)
    return res.json(data);
})

router.post('/', async(req, res) => {
    const data = await userServices.getEntries.create(req.body)
    return res.json(data);
})

router.post('/addExpToUser/:userId/:experienceId', async(req, res) => {
    const data = await userServices.getEntries.addExperienceToUser(req.params.userId,req.params.experienceId)
    return res.json(data);
})

router.put('/:id', async(req, res) => {
    const data = await userServices.getEntries.update(req.params.id,req.body)
    return res.json(data);
})

router.delete('/:id', async(req, res) => {
    const data = await userServices.getEntries.delete(req.params.id)
    return res.json(data);
})

router.delete('/delExpFromUser/:userId/:experienceId', async(req, res) => {
    const data = await userServices.getEntries.delExperienceFromUser(req.params.userId,req.params.experienceId)
    return res.json(data);
})


export default router