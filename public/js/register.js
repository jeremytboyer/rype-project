// const registrationForm = document.getElementById('registrationForm');

// // Add an event listener to the form submission
// registrationForm.addEventListener('submit', function (event) {
//   // Get the form inputs by their IDs
//   const firstNameInput = document.getElementById('firstName');
//   const lastNameInput = document.getElementById('lastName');
//   const emailInput = document.getElementById('Email');
  

//   // Get the values from the form inputs
//   const firstName = firstNameInput.value;
//   const lastName = lastNameInput.value;
//   const email = emailInput.value;
  

//   // Create an object to store the user data
//   const userData = { firstName, lastName, email };

//   // Convert the object to a JSON string and store it in local storage
//   localStorage.setItem('userData', JSON.stringify(userData));

//   // Set the welcome message in the <p> element
//   const welcomeMessageElement = document.getElementById('welcomeMessage');
//   welcomeMessageElement.textContent = `Welcome, ${firstName} ${lastName}!`;

 

  
// });