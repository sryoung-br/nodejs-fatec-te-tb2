class DestroyUserController {
    constructor(userService) {
        this.userService = userService
    }

    async execute(req, resp) {
        const user = await this.userService.destroy(req.params.id)

        return resp.status(200).send({message: `Usuário do ID ${req.params.id} foi excluído com sucesso.`})
    }
}

export { DestroyUserController }