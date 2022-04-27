import { Request, Response, Router } from "express"

const authenticationRouter = Router()

authenticationRouter.get("/", (req: Request, res: Response): void => {
    console.log("authentication router is working")
    res.sendStatus(200)
})

export default authenticationRouter
