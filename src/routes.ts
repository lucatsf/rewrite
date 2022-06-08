import { Router } from "express"
import { ProcessText } from "./ProcessText"

const routes = Router()

const processText = new ProcessText()

routes.post('/api/rewrite', processText.rewrite)

export { routes }
