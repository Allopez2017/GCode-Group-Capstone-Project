function validateForm() {
    var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      
      var namePattern = /^[a-zA-Z ]{2,30}$/;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!namePattern.test(name)) {
          alert("Please enter a valid name (only letters and spaces, 2-30 characters).");
          return false;
      }
  
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return false;
      }
     
      alert("Form submitted successfully!");
      return true;
   }