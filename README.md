To parse the JSON Object we need to first tokenize it.

Tokens can be:

1. Number
2. String
3. Boolean(true/false)
4. Null
5. Array([])
6. Object({})

# How to convert JSON Structure into tokens

Write a regex for each kind of token.

1. Number:

   ```js
   const regForNumber = /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?/g
   /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?/g
   let response = '{"a": 9, "b": -11}'

   response.search(regForNumber)
   // output: 6
   response.match(regForNumber)
   // output: [9, -11]
   ```

2. String:
   ```js
   /"(\\.|[^"\\])*"/g;
   ```
3. Open Braces:
   ```js
   /{/g;
   ```
4. Close Braces:
   ```js
   /}/g;
   ```
5. Boolean
   ```js
   // reg for true or false
   const regForTrue
   ```
