const promises = [
      new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved"), getRandomTime()))
    ];

    // Use Promise.any to wait for the first promise to resolve
    Promise.any(promises)
      .then((result) => {
        // Print the result to the output div
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = result;
      });

    // Helper function to generate a random time between 1 and 5 seconds
    function getRandomTime() {
      return Math.floor(Math.random() * 5000) + 1000;
    }`
