class CreateUserController {
    constructor(userService) {
        this.userService = userService
    }

    async execute(req, resp) {
        const { body } = req
        const user = await this.userService.updateOrCreate(body)

        return resp.status(201).send(user)
    }
}

export { CreateUserController }