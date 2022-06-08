export class ParseText {
  async analyze(text: string) {
    const textLength = text.length;

    const textWords = text.split(' ').length;

    const textWordsRepeated = text.split(' ').reduce((wordCurrency: any, word: string) => {
      if (word in wordCurrency) {
        wordCurrency[word]++;
      } else {
        wordCurrency[word] = 1;
      }

      return wordCurrency;
    }
    , {});

    return {
      textLength,
      textWords,
      textWordsRepeated
    }
  }

}
