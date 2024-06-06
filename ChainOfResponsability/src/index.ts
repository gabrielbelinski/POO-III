import CheckPermissionMiddleware from "./middleware/CheckPermissionMiddleware"
import CheckUserMiddleware from "./middleware/CheckUserMiddleware"
import Server from "./server/Server"
import * as readline from "readline"

declare var process
const server = new Server()

function setPromptQuestions(){
    const rl = readline.createInterface({
        input: process.stdin, output: process.stdout
    })
    rl.question("Digite seu email: ", email => {
        rl.question("Digite a sua senha: ", password => {
            server.login(email, password)
            rl.close
        })
    })
    rl.on("close", () => setPromptQuestions())
}

const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware())
server.setMiddleware(middleware)
setPromptQuestions()