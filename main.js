import fs from "fs";
import process from "process";

const readFileSync = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const TOKEN = {
  OBJECT_OPEN_BRACES: "{",
  OBJECT_CLOSE_BRACES: "}",
  NUMBER_0: "0",
  NUMBER_1: "1",
  NUMBER_2: "2",
  NUMBER_3: "3",
  NUMBER_4: "4",
  NUMBER_5: "5",
  NUMBER_6: "6",
  NUMBER_7: "7",
  NUMBER_8: "8",
  NUMBER_9: "9",
  NEGATIVE: "-",
  COMMA: ",",
  COLON: ":",
  ARRAY_OPEN_BRACES: "[",
  ARRAY_CLOSE_BRACES: "]",
  TRUE: "t",
  FALSE: "f",
  NULL: "n",
  STRING: '"',
  NEXT_LINE: "\n",
  WHITE_SPACE: " "
};

function tokenizer(path) {
  const tokens = [];
  const fileData = readFileSync(path);
  console.log(fileData.length);
  for (let index = 0; index < fileData.length; index++) {
    console.log(index, fileData[index], fileData[index] == /\n/);
    switch (fileData[index]) {
      case TOKEN.OBJECT_OPEN_BRACES:
      case TOKEN.OBJECT_CLOSE_BRACES:
      case TOKEN.ARRAY_CLOSE_BRACES:
      case TOKEN.ARRAY_OPEN_BRACES:
      case TOKEN.COLON:
      case TOKEN.COMMA:
        tokens.push(fileData[index]);
        break;
      case TOKEN.NUMBER_0:
      case TOKEN.NUMBER_1:
      case TOKEN.NUMBER_2:
      case TOKEN.NUMBER_3:
      case TOKEN.NUMBER_4:
      case TOKEN.NUMBER_5:
      case TOKEN.NUMBER_6:
      case TOKEN.NUMBER_7:
      case TOKEN.NUMBER_8:
      case TOKEN.NUMBER_9:
      case TOKEN.NEGATIVE:
      case TOKEN.NULL:
      case TOKEN.FALSE:
      case TOKEN.TRUE:
        index = findLastIndexOfToken(fileData, index, ["}", ","], tokens);
        break;
      case TOKEN.STRING:
        index = findLastIndexOfToken(fileData, index + 1, ["}", '"'], tokens);
        break;
      case TOKEN.NEXT_LINE:
      case TOKEN.WHITE_SPACE:
        break;
      default:
        console.log(tokens);
        process.exit(1);
        break;
    }
  }
  console.log(tokens);
}

const findLastIndexOfToken = (input, startIndex, terminationChars, tokens) => {
  let i = startIndex;
  while (i < input.length && !terminationChars.includes(input[i])) {
    i++;
  }
  console.log(i);
  tokens.push(input.slice(startIndex, i));
  return i;
};

tokenizer("input.json");
