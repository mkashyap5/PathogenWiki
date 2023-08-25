//can add props for formName and inputName so that
//this function can be used for any form and input
// alert(input);

/*let logged_In;
function loggedIn() {
  //logged_In = true;
  //if (logged_In == true) {
  document.getElementByClassName("yes").addEventListener("click");


  document.getElementsByClassName('hide').style.display = 'block';
  document.getElementsByClassName('not_in').style.display = 'none';
  //}

}
function loggedOut() {
  //logged_In = false;
  //if (logged_In == false) {
  document.getElementsByClassName("no").addEventListener("click");
  document.getElementsByClassName('hide').style.display = 'none';
  document.getElementsByClassName('not_in').style.display = 'block';
  //}

}*/

var dict = new Object();
//write a new function below to read the values from Account page
function readValueLoginForm() {
  let form = document.querySelector(".login-form");
  document.getElementById("myLoginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var formData = new FormData(form);
    let email = formData.get("input-1");
    // console.log(email);

    let password = formData.get("input-2");

    // console.log(password);
    verifyUser(email, password);
    //Check if user email and password exist in dict
    //gets called in the log-in page, on submit
  });
};

function verifyUser(email, password) {
      //First, check if the email exists in the dict
      //TO-DO: check if email exists as key in the dict object
      if ("current_user_info" in localStorage) {
        let current_user_info_obj = JSON.parse(localStorage.getItem("current_user_info"));
        // console.log(current_user_info_obj);
         const current_user_email = Object.keys(current_user_info_obj); 
        console.log(current_user_email[0]);
        const current_user_pass = Object.values(current_user_info_obj);
  console.log(current_user_pass[0]);
          if (current_user_email[0] == email && current_user_pass[0] == password) {
            
            //redirect to home page when you click submit on log-in form
            window.location.replace("index.html");
    //set log-in status to be true when user submits login form
            setLogin(true);
          }
          else {
        alert("Email or password is incorrect. Please try again.");
        //set login status to be false since user was prevented from submitting the form to login
        setLogin(false);
          }
      }
      else {
        alert("Your account does not exist. Try again, or sign up.")
        setLogin(false);

      }
      //else if (dict[email] !== password) {
      // alert("Email or password is incorrect");
      //}

      //If yes, then check if the password associated with that email matches the user inputted password
      //TO-DO: check if dict[key] == user inputted password

      //If no, then return 'alert!' saying that user email
      //does not exist, please try again.

}
  
//sign up function HERE 
function readValueSignUpForm() {
  let signUpform = document.querySelector(".signup-form");
  document.getElementById("mySignUpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var signUpformData = new FormData(signUpform);
    let input_1 = signUpformData.get("input-1");
    //console.log(input_1);

    let input_2 = signUpformData.get("input-2");
    //console.log(input_2);

    createUserDictionary(input_1, input_2);
    setLogin(true);
    window.location.replace("account.html");
  })
}
  
function setLogin(status) {
  localStorage.setItem("loggedIn", status);
}
//and to store these values in a dictionary
//key/value pairs for user account info
//can maybe set the user email as the key (should always be unique)
//THIS SHOULD BE CALLED INSIDE THE SIGN UP FUNCTION!
function createUserDictionary(input_1, input_2) {
  dict[input_1] = input_2;
  //localStorage.setItem(input_1, input_2);
  localStorage.setItem('current_user_info', JSON.stringify(dict));
  localStorage.setItem("all_user_accounts", JSON.stringify(dict));
  // localStorage.setItem("User_info", input_2);
  //dict[input_1] = input_2;
  //console.log(dict);
  //return dict;
  // dict = {input_1: input_2};
}
