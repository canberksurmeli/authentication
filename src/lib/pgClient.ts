import { Pool, PoolClient } from "pg"

let isConnect = false
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "base",
    password: "123456",
    port: 5432,
})

export const checkPgConnection = async () => {
    const { rowCount } = await pool.query(`SELECT * from user`)
    if (rowCount === 0) {
        return false
    }
    return true
}

export async function transaction<T>(func: (client: PoolClient) => Promise<T>): Promise<T> {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")
        const result: T = await func(client)
        await client.query("COMMIT")
        return result
    } catch (err) {
        await client.query("ROLLBACK")
        console.error((err as Error).message)
        console.error((err as Error).stack)
        throw err
    } finally {
        client.release()
    }
}

export const getClient = async () => {
    await pool.connect()
}

pool.on("connect", () => (isConnect = true))
pool.on("error", (err) => {
    isConnect = false
    console.error(err.message)
})
