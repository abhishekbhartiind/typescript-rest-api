import { Express, Request, Response } from "express"
import { createUserHandler } from "./controllers/user.controller"
import validateResource from "./middleware/validateResource"
import { createUserSchema } from "./schema/user.schema"

function routes(app: Express) {
  app.get("/ping", (req: Request, res: Response) => {
    return res.sendStatus(200)
  })

  app.post("/api/users", validateResource(createUserSchema), createUserHandler)
}

export default routes
