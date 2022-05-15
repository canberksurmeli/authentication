import { checkPgConnection } from "./pgClient"
import { startHttpsServer, startHttpServer } from "./server"

const app = async () => {
    await checkPgConnection();
    startHttpServer()
    startHttpsServer()
}

app()
