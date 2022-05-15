import { Request, Response, Router } from "express"
import { PoolClient } from "pg"
import { transaction } from "../pgClient"

const authenticationRouter = Router()

authenticationRouter.get("/", (req: Request, res: Response): void => {
    console.log("authentication router is working")
    res.sendStatus(200)
})

authenticationRouter.get(
    "/info/:username",
    async (req: Request, res: Response): Promise<void> => {
        const userId = await transaction(async (client: PoolClient) => {
            return (
                await client.query<{ id: string }>(
                    `SELECT id FROM public.user where username = $1`,
                    [req.params.username]
                )
            ).rows[0]?.id
        })
        if (userId) {
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    }
)

export default authenticationRouter
