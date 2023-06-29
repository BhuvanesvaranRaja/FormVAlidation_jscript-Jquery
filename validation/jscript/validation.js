const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const middlename = document.getElementById("middlename");
const lastname = document.getElementById("lastname");
const submit = document.getElementById("lastname");
const error = document.getElementById("error");
const password = document.getElementById("password");
const repassword = document.getElementById("Repass");
const phno = document.getElementById("number");
const birthplace = document.getElementById("birthplace");
const address = document.getElementById("address");
const city = document.getElementById("city");
const postal = document.getElementById("postal");
const ciyt = document.getElementById("city");

// mail
const mail = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  let messages = [];
  //   name validation
  if (firstname.value == "" || firstname.value == null) {
    messages.push("First Name is required ");
    firstname.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-danger",
      "text-info"
    );
  }
  if (middlename.value == "" || middlename.value == null) {
    messages.push("Middle Name is required ");
    middlename.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  if (lastname.value == "" || lastname.value == null) {
    messages.push("Last Name is required ");
    lastname.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }

  //   email
  var mailFormat = /\S+@\S+\.\S+/;
  if (mail.value.match(mailFormat)) {
    console.log(mail.value);
  } else {
    console.log("fasfd");
    messages.push("Enter Proper Mail id");
    mail.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  //   password
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value.match(passw)) {
    console.log("Correct");
  } else {
    messages.push("Enter Proper password");
    password.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  // repass check
  let password1 = password.value;
  let password2 = repassword.value;
  if (password1 !== password2 || repassword.value == "") {
    messages.push("password doesnt match");
    repassword.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  //   mobile
  if (phno.value.length != 10) {
    messages.push("incorrect mobile number");
    phno.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  //   birthplace
  if (birthplace.value == "" || birthplace.value == null) {
    messages.push("Birthplace is required ");
    birthplace.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-danger",
      "text-info"
    );
  }
  //   addresss
  if (address.value == "" || address.value == null) {
    messages.push("Address is required ");
    address.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  // city
  if (city.value == "" || city.value == null) {
    messages.push("city is required ");
    city.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  // postal
  if (postal.value == "" || postal.value == null) {
    messages.push("city is required ");
    postal.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }
  // city
  if (state.value == "" || state.value == null) {
    messages.push(" select a state ");
    state.classList.add(
      "bg-danger",
      "bg-opacity-10",
      "border",
      "border-info",
      "text-light"
    );
  }

  //   messages array/////////////////////
  if (messages.length > 0) {
    console.log("error");
    error.innerText = messages.join(", ");
  }
}
