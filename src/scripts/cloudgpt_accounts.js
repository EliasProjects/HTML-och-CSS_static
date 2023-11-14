// cloudgpt.js

const cloudgpt_activeUsers = document.getElementById("cloudgpt_activeUsers");

// Initialize the CloudGPT number with a default value
let cloudgptNumber = 23201;

cloudgpt_activeUsers.innerHTML = formatNumber(cloudgptNumber);

function updateCloudGPTNumbers() {
  // Update the CloudGPT number
  cloudgptNumber = updateNumber(cloudgptNumber);

  // Update the content with formatted number
  cloudgpt_activeUsers.innerHTML = formatNumber(cloudgptNumber);
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

// Update the CloudGPT number every 5 seconds
setInterval(updateCloudGPTNumbers, 7000);
