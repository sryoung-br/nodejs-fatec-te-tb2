import * as bcrypt from 'bcrypt'
import { ErrorCustom } from '../../errors/error-custom.js'

class UserService {
    constructor(userModel) {
        this.userModel = userModel
    }

    async getAll() {
        return await this.userModel.findAll()
    }

    async get(id) {
        await this.findUser(id)
        return await this.userModel.findByPk(id)
    }

    async updateOrCreate({name, password, email}, id = null) {
        if(id){
            await this.findUser(id)
        }

        if(password){
            const SALTD_ROUND = 10
            password = await bcrypt.hash(password, SALTD_ROUND)
        }
       
        const {count} = await this.userModel.findAndCountAll({
            where: { email }
        })
        if(count) {
            throw new ErrorCustom({
                status: 400,
                error: 'E-mail inválido'
            })
        }
        if(id) {
            return this.userModel.update({ name, email, password }, { where: { id } })
        }
        return this.userModel.create({ name, email, password })
    }

    async destroy(id) {
        await this.findUser(id)
        return await this.userModel.destroy({ where: { id } })
    }

    async findUser(id){
        const {count} = await this.userModel.findAndCountAll({
            where: { id }
        })
        if(!count){
            throw new ErrorCustom({
                status: 400,
                error: 'Usuário não localizado'
            })
        }
    }
}

export { UserService }