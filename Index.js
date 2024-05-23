document.addEventListener('DOMContentLoaded', function() {
  console.log('Document is fully loaded and parsed');

  // Select the button element with id "change-color" (assuming you have one)
  const changeColorButton = document.getElementById('change-color');

  // If the button exists
  if (changeColorButton) {
    // Add a click event listener to the button
    changeColorButton.addEventListener('click', function() {
      // ... rest of your code to change color on button click
    });
  } else {
    console.error('Button with id "change-color" not found');
  }
});