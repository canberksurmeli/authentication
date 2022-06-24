import { checkPgConnection } from "../../lib/pgClient"
import { startHttpServer, startHttpsServer } from "./server/server"

const app = async () => {
    await checkPgConnection()
    startHttpsServer()
    startHttpServer()
}

app()
