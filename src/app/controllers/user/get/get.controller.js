class GetUserController {
    constructor(userService) {
        this.userService = userService
    }

    async execute(req, resp) {
        if(req.params.id){
            var user = await this.userService.get(req.params.id)
        }
        else {
            var user = await this.userService.getAll()
        }
        return resp.status(200).send(user)
    }
}

export { GetUserController }