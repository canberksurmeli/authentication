import { startHttpsServer, startHttpServer } from "./server"

const app = () => {
    startHttpServer()
    startHttpsServer()
}

app()
