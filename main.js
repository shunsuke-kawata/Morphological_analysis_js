const DICT_PATH = "./dict";

const analyze_sentence = async () => {
  let sentence = document.getElementById("sentenceToAnalyze").value;
  console.log("start");
  console.log(sentence);
  let result;
  let result_array = [];
  await kuromoji.builder({ dicPath: DICT_PATH }).build((err, tokenizer) => {
    const tokens = tokenizer.tokenize(sentence); // 解析データの取得
    tokens.forEach((token) => {
      // 解析結果を順番に取得する
      result = token;
      result_array.push([result.surface_form, result.pos]);
      console.log([result.surface_form, result.pos]);
    });
  });
  console.log(result_array);
  return result_array;
};

const display_result = async () => {
  // while (result_div?.firstChild) {
  //   container.removeChild(result_div?.firstChild);
  // }
  const result_array = await analyze_sentence();
  let result_ul = document.getElementById("result_ul");
  result_array.forEach((item) => {
    const list_item = document.createElement("li");
    list_item.textContent = item[0] + "," + item[1];
    result_ul.appendChild(list_item);
    console.log(list_item);
  });
};
