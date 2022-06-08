import { Request, Response } from "express"


export class ProcessText {

  async rewrite(req: Request, res: Response) {
    return res.json({
      text: "Hello World!"
    })
  }

  source(): object {
    return {
      "message": "Hello my friend"
    }
  }
}
