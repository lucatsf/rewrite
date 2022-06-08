import { Router } from "express"
import { ProcessText } from "./ProcessText"

const routes = Router()

const processText = new ProcessText()

routes.post('/rewrite', processText.rewrite)

export { routes }
