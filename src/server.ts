import express, { Request, Response } from "express"
import http from "http"
import https from "https"
import authenticationRouter from "./routers/authentication"
import passRouter from "./routers/pass-router"
const app = express()

app.use(express.json())
app.use("/auth", authenticationRouter)
app.use("/pass", passRouter)

app.get("/", (req: Request, res: Response) => {
    console.log("all systems are nominal")
    res.sendStatus(200)
})

export const startHttpsServer = () => {
    const port = 8081
    const server = https.createServer(
        {
            rejectUnauthorized: false,
            requestCert: false,
        },
        app
    )

    server.listen(port, () => {
        console.log(`Server is running at https://localhost:${port}`)
    })
}

export const startHttpServer = () => {
    const port = 8080
    const server = http.createServer(app)

    server.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
    })
}
