// openai.js

const openai_activeUsers = document.getElementById("openai_activeUsers");

// Initialize the OpenAI number with a default value
let openaiNumber = 123020290;

openai_activeUsers.innerHTML = formatNumber(openaiNumber);

function updateOpenAINumbers() {
  // Update the OpenAI number
  openaiNumber = updateNumber(openaiNumber);

  // Update the content with formatted number
  openai_activeUsers.innerHTML = formatNumber(openaiNumber);
}

// Function to update the number based on a random value
function updateNumber(number) {
  // Get a random number within the range of -5 to 10
  const randomValue = getRandomNumber(-5, 10);

  // Update the number based on the random value
  const updatedNumber = number + randomValue;

  return updatedNumber;
}

// Function to format the number with commas
function formatNumber(number) {
  // Convert the number to a formatted string
  return number.toLocaleString();
}

// Function to get a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update the OpenAI number every 5 seconds
setInterval(updateOpenAINumbers, 4000);
