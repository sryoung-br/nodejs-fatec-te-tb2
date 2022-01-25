import { Router } from 'express'
import { createUserController } from '../app/controllers/user/create/index.js'
import { getUserController } from '../app/controllers/user/get/index.js'
import { updateUserController } from '../app/controllers/user/update/index.js'
import { destroyUserController } from '../app/controllers/user/destroy/index.js'

const router = Router()


router.get('/users', getUserController.execute.bind(getUserController))

router.get('/user/:id', getUserController.execute.bind(getUserController))

router.post('/user', createUserController.execute.bind(createUserController))

router.put('/user/:id', updateUserController.execute.bind(updateUserController))

router.delete('/user/:id', destroyUserController.execute.bind(destroyUserController))


export default router