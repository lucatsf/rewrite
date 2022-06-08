import { Request, Response } from "express"
import { Paraphrase } from "./Paraphrase"
import { ParseText } from "./ParseText"

export class ProcessText {
  async rewrite(req: Request, res: Response) {
    const paraphrase = new Paraphrase()
    const parseText = new ParseText()

    const { text } = req.body

    const { textLength, textWords, textWordsRepeated } = await parseText.analyze(text)

    const result = await paraphrase.processApi(text, 1)

    const {
      textLength: textLengthNewText,
      textWords: textWordsNewText,
      textWordsRepeated: textWordsRepeatedNewText,
    } = await parseText.analyze(result[0])

    return res.json({
      newText: {
        text: result,
        textLength: textLengthNewText,
        textWords: textWordsNewText,
        textWordsRepeated: textWordsRepeatedNewText,
      },
      oldText: {
        textLength,
        textWords,
        textWordsRepeated,
        text
      },
    })
  }

}
