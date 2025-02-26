var vocab = "../js/jp_vocab.json"
var home = "../japanese/index.html"

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='../images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", function (event) {
showLoading("#q_word");
$ajaxUtils.sendGetRequest(
  vocab,
  buildAndShowHomeHTML,
  true); 
});


var dict = function () {$ajaxUtils.sendGetRequest(
  vocab,
  function (){
    return request;
  },
  true)};


// Builds HTML for the home page based on categories array
// returned from the server.
async function buildAndShowHomeHTML (dict) {
  var q_word = chooseRandomQ(dict); 
  console.log(q_word);
  console.log(q_word.japanese);
  console.log(q_word.pronounciation);
  var html1 = "<h1 class='text-center'>";
  html1 += q_word.japanese;
  var html2 = "</h1>";
  var html = html1 + html2;
  insertHtml("#q_word", html);  
};

function chooseRandomQ (dict) {
  var randomArrayIndex = Math.floor(Math.random() * dict.length);
  return dict[randomArrayIndex];
}

  //$ajaxUtils.sendGetRequest(
    //homeHtmlUrl,
    //function (homeHtml) {    
      
    //},
    //false)};








