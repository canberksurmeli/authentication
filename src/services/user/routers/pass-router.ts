import { Request, Response, Router } from "express"

const passRouter = Router()

passRouter.get("/", (req: Request, res: Response): void => {
    console.log("pass router is working")
    res.sendStatus(200)
})

export default passRouter
