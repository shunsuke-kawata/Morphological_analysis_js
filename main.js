const DICT_PATH = "./dict";

async function analyze_sentence() {
  let sentence = document.getElementById("sentenceToAnalyze").value;
  console.log("start");
  console.log(sentence);
  let tmp = "";
  await kuromoji.builder({ dicPath: DICT_PATH }).build((err, tokenizer) => {
    const tokens = tokenizer.tokenize(sentence); // 解析データの取得
    tokens.forEach((token) => {
      // 解析結果を順番に取得する
      console.log(token);
    });
  });
}
