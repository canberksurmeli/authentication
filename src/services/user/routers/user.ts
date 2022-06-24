import { Request, Response, Router } from "express"
import { tableNames } from "../../../lib/contants"
import { UserListResponse } from "../../../lib/models"
import { transaction } from "../../../lib/pgClient"

const user = Router()

const server = "https://localhost:8081/user/"

user.get("/", async (req: Request, res: Response) => {
    const result: UserListResponse = {
        data: [],
        paging: {
            take: req.body.take,
            skip: req.body.skip,
        },
    }

    const items = await transaction(async (client) => {
        const { rows, rowCount } = await client.query<{
            id: string
            name: string
            job: string
        }>(
            `SELECT id, name, job FROM public.${tableNames.user}
            ORDER BY name DESC
            OFFSET $1
            LIMIT $2`,
            [req.body.limit, req.body.offset]
        )
        return rowCount > 0 ? rows : []
    })

    result.data = items
    console.log(result)
    res.json(result)
})

export default user
