
//Here is a function in JavaScript to validate an email using regex 

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match email format
  return re.test(String(email).toLowerCase()); // returns true if the email passes the test, false otherwise
}

