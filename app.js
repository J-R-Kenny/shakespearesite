const express = require("express");
const app = express();
const shakespeareStrings = require("./shakespeare");
app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/shakespeareSearch/:searchTerm?", (req, res) => {
  let searchTerm = req.params.searchTerm;
  let searchResults;
  console.log(searchTerm);
  if (!searchTerm === undefined) {
    searchResults = pullfromStrings(shakespeareStrings, searchTerm);
  }
  console.log(searchResults);
  res.render("shakespearesearch", { searchTerm, searchResults });
});

function pullfromStrings(inputArray, inputWord) {
  let returnArray = [];
  const lowerCaseArray = inputArray.map((word) => word.toLowerCase());
  const lowerCaseWord = inputWord.toLowerCase();
  console.log(lowerCaseArray);
  console.log(lowerCaseWord);
  if (lowerCaseArray.includes(lowerCaseWord)) {
    returnArray.push(lowerCaseWord);
  }
  return returnArray;
}
console.log(pullfromStrings(shakespeareStrings, "one"));
