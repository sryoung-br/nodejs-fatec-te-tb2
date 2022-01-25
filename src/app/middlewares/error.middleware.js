import { ErrorCustom } from '../../errors/error-custom.js'

const errorHandling = (err, req, resp, next) => {
    let status = 500
    let error = []
    if(err.errors){
        err.errors.map(e => {
            error.push(e.message)
        })
    }
    
    if(err instanceof ErrorCustom) {
        const body = JSON.parse(err.message)
        status = body.status
        error = body.error
    }

    return resp.status(status).send({
        error
    })
}

export { errorHandling }