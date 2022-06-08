import "reflect-metadata"
import express, { NextFunction, Response } from "express"
import "express-async-errors"
import AppError from './AppError'
import { routes } from './routes'

import cors from "cors"

const app = express()

const allowedOrigins = [process.env.ALLOWED_ORIGINS_PROD || '*']

const options: cors.CorsOptions = {
  origin: allowedOrigins,
}

app.use(cors(options))

app.use(express.json())

app.use(routes)

app.use(
  (
    err: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    })
  }
)

app.listen(3333, () => {
  console.log('Server started on port 3333! 🚀')
})
