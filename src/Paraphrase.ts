import 'dotenv/config';
import AppError from './AppError';

export class Paraphrase {
  async processApi(text: string, possibilities: number) {
    const Paraphrase = require('paraphrase-sentences');

    const key = process.env.GOOGLE_KEY;

    try {
      const  paraphrase = new Paraphrase({
        num: possibilities,
        key,
        lang: 'pt',
        removeDuplicates: true,
      });

      const result = await paraphrase.get(text);

      return result;
    } catch (err) {
      throw new AppError('Error on process', 500);
    }
  }
}

