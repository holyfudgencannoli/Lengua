$(document).ready(function () {
  var words = [];  // We will load the words array from the JSON file
  var currentWord = null;

  // Function to load the words from the JSON file
  function loadWords() {
    fetch('../js/jp_vocab.json')  // Fetch the JSON file
      .then(response => response.json())  // Parse the JSON data
      .then(data => {
        words = data;  // Use the data as words
        console.log(words);  // You can log the words to the console for verification
        $('#pick-word').prop('disabled', false);  // Enable the "Pick a Word" button after words are loaded

        // Automatically pick the first word after words are loaded
        pickRandomWord();
      })
      .catch(error => console.error('Error loading the JSON file:', error));  // Handle any errors
  }

  // Function to pick a random word
  function pickRandomWord() {
    if (words.length === 0) {
      alert('No words loaded!');
      return;
    }

    var randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    $('#japanese-word').text(currentWord.japanese);  // Display the Japanese word
    $('#english-reading-input').val('');  // Clear the input field for reading
    $('#meaning-input').val('
