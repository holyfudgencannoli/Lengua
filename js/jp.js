$(document).ready(function () {
  $('#hiragana').hide();
  $('#try-again').hide();  // Hide the try again button until after first attempt
  var words = [];  // We will load the words array from the JSON file
  var currentWord = null;
  
  // Funtion to restart
  
  function restart() {
      location.reload();
  }
  
  $('#try-again').click(function () {
    location.reload(); // Reloads the current page
});

  // Function to load the words from the JSON file
  function loadWords() {
    fetch('../js/jp_vocab.json')  // Fetch the JSON file
      .then(response => response.json())  // Parse the JSON data
      .then(data => {
        words = data;  // Use the data as words
        return words;  // You can log the words to the console for verification
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
    $('#hiragana').text(currentWord.pronounciation); // Display the hiragana, hidden at first, to show after first try
    $('#english-reading-input').val('');  // Clear the input field for reading
    $('#meaning-input').val('');  // Clear the meaning input
    $('#meaning-prompt').hide();  // Hide the meaning prompt
    $('#meaning-input').hide();  // Hide the meaning input
    $('#check-meaning-answer').hide();  // Hide the check meaning button
    $('#check-reading-answer').show();  // Show the check reading button
    $('#pick-word').hide();  // Hide the pick word button after selecting a word
    
  }

  // Event listener for "Pick a Word" button
  $('#pick-word').click(function () {
    pickRandomWord(); // Pick a new word when the button is clicked again
    $('#pick-word').hide();  // Hide the pick word button again after picking a word
  });

  // Event listener for "Check Reading" button
  $('#check-reading-answer').click(function () {
    var userReading = $('#english-reading-input').val().trim().toLowerCase();
    if (userReading === currentWord.pronounciation.toLowerCase()) {
      alert("Correct Reading!");
      $('#meaning-prompt').show();  // Show the meaning prompt
      $('#meaning-input').show();  // Show the meaning input field
      $('#check-meaning-answer').show();  // Show the check meaning button
      $('#check-reading-answer').hide();  // Hide the check reading button
    } else {
      alert("Incorrect Reading! Correct reading is:", currentWord.pronounciation, "Try again.");
     // $('#hiragana').show(); // Show thr hiragana pronounciation as a hint/learning utility
      $('#try-again').show();  // Show the restart button
    }
  });

  // Event listener for "Check Meaning" button
  $('#check-meaning-answer').click(function () {
    var userMeaning = $('#meaning-input').val().trim();
    if (userMeaning.toLowerCase() === currentWord.translation.toLowerCase()) {
      alert("Correct Meaning!");
      $('#pick-word').show();  // Show the pick word button again to start over
    } else {
      alert("Incorrect Meaning! The correct answer is: " + currentWord.translation);
      $('#try-again').show();  // Show the restart button
    }
  });

  // Load the words from the JSON file when the page loads
  loadWords();
});
